import { LookupAttribute } from "../Attributes/LookupAttribute";
import { ControlBase } from "./ControlBase";

export class LookupControl extends ControlBase implements Xrm.Controls.LookupControl {
    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);
    }
    
    addPreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    addCustomFilter(filter: string, entityLogicalName?: string): void {
        throw new Error("Method not implemented.");
    }

    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void {
        throw new Error("Method not implemented.");
    }

    addOnLookupTagClick(handler: Xrm.Events.LookupTagClickHandler): void {
        throw new Error("Method not implemented.");
    }

    getDefaultView(): string {
        throw new Error("Method not implemented.");
    }

    removeOnLookupTagClick(handler: Xrm.Events.LookupTagClickHandler): void {
        throw new Error("Method not implemented.");
    }

    removePreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    setDefaultView(viewGuid: string): void {
        throw new Error("Method not implemented.");
    }

    getEntityTypes(): string[] {
        throw new Error("Method not implemented.");
    }

    setEntityTypes(entityLogicalNames: string[]): void {
        throw new Error("Method not implemented.");
    }

    getAttribute(): LookupAttribute {
        return new LookupAttribute(this.logicalName, this.formContext);
    }
}