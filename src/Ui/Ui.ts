import { TabCollection } from "./TabCollection";

export class Ui implements Xrm.Ui {
    constructor() {
        this.tabs = new TabCollection(this);
    }

    addOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
        throw new Error("Method not implemented.");
    }

    setFormNotification(message: string, level: Xrm.FormNotificationLevel, uniqueId: string): boolean {
        throw new Error("Method not implemented.");
    }

    clearFormNotification(uniqueId: string): boolean {
        throw new Error("Method not implemented.");
    }
    
    close(): void {
        throw new Error("Method not implemented.");
    }

    footerSection: Xrm.Controls.FooterSection = null as unknown as Xrm.Controls.FooterSection;

    headerSection: Xrm.Controls.HeaderSection  = null as unknown as Xrm.Controls.HeaderSection;

    getFormType(): XrmEnum.FormType {
        throw new Error("Method not implemented.");
    }

    getViewPortHeight(): number {
        throw new Error("Method not implemented.");
    }

    getViewPortWidth(): number {
        throw new Error("Method not implemented.");
    }

    refreshRibbon(refreshAll?: boolean): void {
        throw new Error("Method not implemented.");
    }

    removeOnLoad(handler: Xrm.Events.LoadEventHandler | Xrm.Events.LoadEventHandlerAsync): void {
        throw new Error("Method not implemented.");
    }

    setFormEntityName(name: string): void {
        throw new Error("Method not implemented.");
    }

    process: Xrm.Controls.ProcessControl = null as unknown as Xrm.Controls.ProcessControl;

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.Control>;

    formSelector: Xrm.Controls.FormSelector  = null as unknown as Xrm.Controls.FormSelector;

    navigation: Xrm.Controls.Navigation = null as unknown as Xrm.Controls.Navigation;

    tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;

    quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;

}