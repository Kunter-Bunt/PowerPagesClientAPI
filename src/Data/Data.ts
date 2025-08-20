import type { FormContext } from "../FormContext";
import { AttributesCollection } from "../Attributes/AttributesCollection";
import { PromiseLike } from "../Helpers/PromiseLike";

interface DataSaveState {
    btn: HTMLInputElement;
    observer: MutationObserver | null;
    settled: boolean;
    seenDisabled: boolean;
    unloadHandler: ((this: Window, ev: BeforeUnloadEvent) => any) | null;
}

export class Data implements Xrm.Data {
    private formContext: FormContext;
    private onLoadHandlers: Xrm.Events.DataLoadEventHandler[] = [];
    private hasFiredInitial: boolean = false;
    private sharedVariables: Record<string, any> = {};
    private domListenerAttached: boolean = false;
    attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute<any>>;
    entity: Xrm.Entity;
    process: Xrm.ProcessFlow.ProcessManager;

    constructor(formContext: FormContext) {
        this.formContext = formContext;
        this.attributes = new AttributesCollection(formContext);
        this.entity = null as unknown as Xrm.Entity;
        this.process = null as unknown as Xrm.ProcessFlow.ProcessManager;
    }

    addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void {
        this.onLoadHandlers.push(handler);

        if (this.hasFiredInitial) {
            this.invokeHandler(handler, XrmEnum.FormDataLoadState.InitialLoad);
            return;
        }

        if (!this.domListenerAttached) {
            this.domListenerAttached = true;
            const fire = () => this.fireInitialLoad();
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(fire, 0);
            } else {
                const onReady = () => {
                    document.removeEventListener('DOMContentLoaded', onReady);
                    window.removeEventListener('load', onReady);
                    fire();
                };
                document.addEventListener('DOMContentLoaded', onReady, { once: true });
                window.addEventListener('load', onReady, { once: true });
            }
        }
    }

    removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.onLoadHandlers = this.onLoadHandlers.filter(h => h !== handler);
    }

    private fireInitialLoad(): void {
        if (this.hasFiredInitial) return;
        this.hasFiredInitial = true;
        const handlers = [...this.onLoadHandlers];
        handlers.forEach(h => this.invokeHandler(h, XrmEnum.FormDataLoadState.InitialLoad));
    }

    private invokeHandler(handler: Xrm.Events.DataLoadEventHandler, state: XrmEnum.FormDataLoadState): void {
        const context = this.createDataLoadEventContext(state);
        try {
            handler(context);
        } catch (e) {
            console.error('Error in Data OnLoad handler', e);
        }
    }

    private createDataLoadEventContext(state: XrmEnum.FormDataLoadState): Xrm.Events.DataLoadEventContext {
        const self = this;
        const eventArgs: Xrm.Events.DataLoadEventArguments = {
            getDataLoadState: () => state
        };

        const context: Xrm.Events.DataLoadEventContext = {
            getContext: () => null as unknown as Xrm.GlobalContext,
            getDepth: () => 1,
            getEventSource: () => self as unknown as Xrm.Entity,
            getFormContext: () => self.formContext,
            getSharedVariable: <T>(key: string) => self.sharedVariables[key] as T,
            setSharedVariable: <T>(key: string, value: T) => { self.sharedVariables[key] = value; },
            getEventArgs: () => eventArgs
        } as Xrm.Events.DataLoadEventContext;
        return context;
    }

    getIsDirty(): boolean {
        let dirty = false;
        this.attributes.forEach(attr => {
            if (!dirty && attr.getIsDirty()) dirty = true;
        });
        return dirty;
    }

    isValid(): boolean {
        throw new Error("Method not implemented.");
    }

    refresh(save: boolean): Xrm.Async.PromiseLike<undefined> {
        const deferred = new PromiseLike<undefined>();

        try {
            if (save) {
                this.save().then(() => deferred.resolve(undefined), err => deferred.reject(err));
            } else {
                this.doRefresh(deferred);
            }
        } catch (e) {
            deferred.reject(e);
        }
        return deferred;
    }
    
    save(saveOptions?: Xrm.SaveOptions): Xrm.Async.PromiseLike<undefined> {
        const deferred = new PromiseLike<undefined>();
        try {
            if (!this.triggerSaveClick()) {
                deferred.reject(new Error('Save button with class "submit-btn" not found'));
                return deferred;
            }
            const btn = document.querySelector('input.submit-btn') as HTMLInputElement | null;
            if (!btn) {
                deferred.reject(new Error('Save button with class "submit-btn" not found after click'));
                return deferred;
            }
            const state: DataSaveState = {
                btn,
                observer: null,
                settled: false,
                seenDisabled: btn.disabled,
                unloadHandler: null
            };
            state.unloadHandler = () => this.saveSucceed(state, deferred);
            window.addEventListener('beforeunload', state.unloadHandler, { once: true });
            state.observer = new MutationObserver(() => {
                if (state.btn.disabled) {
                    state.seenDisabled = true;
                } else if (state.seenDisabled) {
                    this.saveFail(state, deferred, new Error('Save failed: submit button re-enabled before navigation'));
                }
            });
            state.observer.observe(state.btn, { attributes: true, attributeFilter: ['disabled'] });
            setTimeout(() => { if (state.btn.disabled) state.seenDisabled = true; }, 0);
        } catch (e) {
            deferred.reject(e);
        }
        return deferred;
    }

    private triggerSaveClick(): boolean {
        const btn = document.querySelector('input.submit-btn') as HTMLInputElement | null;
        if (!btn) return false;
        btn.click();
        return true;
    }

    private doRefresh(deferred: PromiseLike<undefined>): void {
        setTimeout(() => {
            try {
                window.location.reload();
                deferred.resolve(undefined);
            } catch (e) {
                deferred.reject(e);
            }
        }, 0);
    }

    private saveCleanup(state: DataSaveState): void {
        if (state.unloadHandler)
            window.removeEventListener('beforeunload', state.unloadHandler);
        if (state.observer) state.observer.disconnect();
    }

    private saveSucceed(state: DataSaveState, deferred: PromiseLike<undefined>): void {
        if (state.settled) return;
        state.settled = true;
        this.saveCleanup(state);
        deferred.resolve(undefined);
    }

    private saveFail(state: DataSaveState, deferred: PromiseLike<undefined>, err: any): void {
        if (state.settled) return;
        state.settled = true;
        this.saveCleanup(state);
        deferred.reject(err);
    }
}