import { FormContext } from "../FormContext";
import { TabCollection } from "./TabCollection";

export class Ui implements Xrm.Ui {
    private formContext: FormContext;
    private onLoadHandlers: Array<Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync> = [];
    private hasFiredInitial: boolean = false;
    private sharedVariables: Record<string, any> = {};
    private domListenerAttached: boolean = false;

    constructor(formContext: FormContext) {
        this.formContext = formContext;
        this.tabs = new TabCollection(this);
    }

    addOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
        this.onLoadHandlers.push(handler);

        if (this.hasFiredInitial) {
            this.invokeHandler(handler);
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

    setFormNotification(message: string, level: Xrm.FormNotificationLevel, uniqueId: string): boolean {
        try {
            if (!uniqueId) return false;
            const host = document.getElementById('EntityFormPanel');
            if (!host) return false;

            let bar = document.getElementById(uniqueId) as HTMLDivElement | null;
            const variant = this.mapFormNotificationLevelToCSS(level);

            if (!bar) {
                bar = document.createElement('div');
                bar.id = uniqueId;
                host.insertBefore(bar, host.firstChild);
            }

            bar.classList.add('alert');
            bar.classList.remove('alert-danger', 'alert-warning', 'alert-info');
            bar.classList.add(variant);

            bar.textContent = message ?? '';

            return true;
        } catch (e) {
            console.error('setFormNotification failed', e);
            return false;
        }
    }

    clearFormNotification(uniqueId: string): boolean {
        try {
            if (!uniqueId) return false;
            const el = document.getElementById(uniqueId);
            if (el && el.parentElement) {
                el.parentElement.removeChild(el);
                return true;
            }
            return false;
        } catch (e) {
            console.error('clearFormNotification failed', e);
            return false;
        }
    }

    close(): void {
        try {
            window.history.back();
        } catch (e) {
            console.error('Ui.close failed', e);
        }
    }

    footerSection: Xrm.Controls.FooterSection = null as unknown as Xrm.Controls.FooterSection;

    headerSection: Xrm.Controls.HeaderSection = null as unknown as Xrm.Controls.HeaderSection;

    getFormType(): XrmEnum.FormType {
        try {
            const host = document.getElementById('EntityFormPanel') as HTMLElement | null;
            const form = host?.querySelector('.entity-form') as HTMLElement | null;

            if (form) {
                if (form.classList.contains('form-readonly')) {
                    return XrmEnum.FormType.ReadOnly;
                }

                const baseId = form.id || '';
                let entityIdValue = '';
                if (baseId) {
                    const idEl = document.getElementById(`${baseId}_EntityID`) as HTMLInputElement | null;
                    if (idEl) {
                        entityIdValue = (idEl.value ?? idEl.getAttribute('value') ?? '').trim();
                    }
                }

                return entityIdValue ? XrmEnum.FormType.Update : XrmEnum.FormType.Create;
            }

            return XrmEnum.FormType.Create;
        } catch (e) {
            console.error('Error in UI getFormType, returning Create', e);
            return XrmEnum.FormType.Create;
        }
    }

    getViewPortHeight(): number {
        const el = document.getElementById('EntityFormPanel') as HTMLElement | null;
        return el ? el.clientHeight : 0;
    }

    getViewPortWidth(): number {
        const el = document.getElementById('EntityFormPanel') as HTMLElement | null;
        return el ? el.clientWidth : 0;
    }

    refreshRibbon(refreshAll?: boolean): void {
        throw new Error("Method not implemented.");
    }

    removeOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
        this.onLoadHandlers = this.onLoadHandlers.filter(h => h !== handler);
    }

    setFormEntityName(name: string): void {
        throw new Error("Method not implemented.");
    }

    process: Xrm.Controls.ProcessControl = null as unknown as Xrm.Controls.ProcessControl;

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.Control>;

    formSelector: Xrm.Controls.FormSelector = null as unknown as Xrm.Controls.FormSelector;

    navigation: Xrm.Controls.Navigation = null as unknown as Xrm.Controls.Navigation;

    tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;

    quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;

    private fireInitialLoad(): void {
        if (this.hasFiredInitial) return;
        this.hasFiredInitial = true;
        const handlers = [...this.onLoadHandlers];
        handlers.forEach(h => this.invokeHandler(h));
    }

    private invokeHandler(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
        const context = this.createLoadEventContext();
        try {
            const result = (handler as any)(context);
            if (result && typeof (result as Promise<unknown>)?.then === 'function') {
                (result as Promise<unknown>).catch(e => console.error('Error in UI OnLoad handler (async)', e));
            }
        } catch (e) {
            console.error('Error in UI OnLoad handler', e);
        }
    }

    private createLoadEventContext(): Xrm.Events.LoadEventContext {
        const self = this;
        const eventArgs: Xrm.Events.LoadEventArguments = {} as Xrm.Events.LoadEventArguments;
        const context: Xrm.Events.LoadEventContext = {
            getContext: () => null as unknown as Xrm.GlobalContext,
            getDepth: () => 1,
            getEventSource: () => self as unknown as Xrm.Entity,
            getFormContext: () => self.formContext,
            getSharedVariable: <T>(key: string) => self.sharedVariables[key] as T,
            setSharedVariable: <T>(key: string, value: T) => { self.sharedVariables[key] = value; },
            getEventArgs: () => eventArgs,
            preventDefault: () => { },
            stopPropagation: () => { }
        } as Xrm.Events.LoadEventContext;
        return context;
    }

    private mapFormNotificationLevelToCSS(level: Xrm.FormNotificationLevel): string {
        switch (level) {
            case 'ERROR':
                return 'alert-danger';
            case 'WARNING':
                return 'alert-warning';
            case 'INFO':
            default:
                return 'alert-info';
        }
    }
}