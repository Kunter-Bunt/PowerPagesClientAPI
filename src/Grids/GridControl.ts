import { ControlBase } from "../Controls/ControlBase";
import { Grid } from "./Grid";

export class GridControl extends ControlBase implements Xrm.Controls.GridControl {
    gridElement: HTMLDivElement;
    grid: Grid;
    
    private onLoadHandlers: Xrm.Events.GridControl.LoadEventHandler[] = [];
    private mutationObserver?: MutationObserver;

    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext)
        this.gridElement = this.element.querySelector('div.subgrid') as HTMLDivElement;
        this.grid = new Grid(logicalName, formContext);
    }

    addOnLoad(handler: Xrm.Events.GridControl.LoadEventHandler): void {
        this.onLoadHandlers.push(handler);
        if (!this.mutationObserver) {
            const table = this.gridElement.querySelector('table');
            if (table) {
                this.mutationObserver = new MutationObserver((mutations) => {
                    for (const mutation of mutations) {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            const context = {
                                getEventSource: () => this,
                                getDepth: () => 1,
                                getContext: () => null as unknown as Xrm.GlobalContext,
                                preventDefault: () => {},
                                stopPropagation: () => {},
                                getSharedVariable: (_name: string) => null,
                                setSharedVariable: (_name: string, _value: any) => {},
                                getFormContext: () => this.formContext,
                            } as Xrm.Events.GridControl.LoadEventContext;
                            this.onLoadHandlers.forEach(h => h(context));
                        }
                    }
                });
                this.mutationObserver.observe(table, { childList: true });
            }
        }
    }

    getContextType(): XrmEnum.GridControlContext {
        if (this.gridElement.getAttribute("data-ref-id"))
            return XrmEnum.GridControlContext.FormContextRelated;
        else
            return XrmEnum.GridControlContext.FormContextUnrelated;
    }

    getEntityName(): string {
        return this.gridElement.getAttribute("data-ref-entity")!;
    }

    getFetchXml(): string {
        throw new Error("Method not implemented.");
    }

    getGrid(): Xrm.Controls.Grid {
        return this.grid;
    }

    getRelationship(): Xrm.Controls.GridRelationship {
        return {
            name: this.gridElement.getAttribute("data-ref-rel")!
        } as Xrm.Controls.GridRelationship;
    }

    getUrl(client?: XrmEnum.GridClient): string {
        return window.location.href;
    }

    getViewSelector(): Xrm.Controls.ViewSelector {
        throw new Error("Method not implemented.");
    }

    openRelatedGrid(): void {
        throw new Error("Method not implemented.");
    }

    refresh(): void {
        throw new Error("Method not implemented.");
    }

    refreshRibbon(): void {
        
    }

    removeOnLoad(handler: () => void): void {
        this.onLoadHandlers = this.onLoadHandlers.filter(h => h !== handler);
        if (this.onLoadHandlers.length === 0 && this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = undefined;
        }
    }

    getAttribute(): Xrm.Attributes.Attribute<any> {
        throw new Error("Method not implemented.");
    }
}