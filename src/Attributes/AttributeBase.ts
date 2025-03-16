export abstract class AttributeBase implements Xrm.Attributes.Attribute {
    logicalName: string;
    element: HTMLInputElement;

    constructor(logicalName: string) {
        this.logicalName = logicalName;
        
        this.element = document.getElementById(logicalName) as HTMLInputElement;

        if (!this.element)
            throw new Error(`Attribute ${this.logicalName} not found`);
    }

    addOnChange(handler: Xrm.Events.Attribute.ChangeEventHandler): void {
        throw new Error("Method not implemented.");
    }

    fireOnChange(): void {
        throw new Error("Method not implemented.");
    }

    getAttributeType(): Xrm.Attributes.AttributeType {
        throw new Error("Method not implemented.");
    }

    getFormat(): Xrm.Attributes.AttributeFormat {
        throw new Error("Method not implemented.");
    }

    getIsDirty(): boolean {
        throw new Error("Method not implemented.");
    }

    getName(): string {
        throw new Error("Method not implemented.");
    }

    getParent(): Xrm.Entity {
        throw new Error("Method not implemented.");
    }

    getRequiredLevel(): Xrm.Attributes.RequirementLevel {
        throw new Error("Method not implemented.");
    }

    getSubmitMode(): Xrm.SubmitMode {
        throw new Error("Method not implemented.");
    }

    getUserPrivilege(): Xrm.Privilege {
        throw new Error("Method not implemented.");
    }

    removeOnChange(handler: Xrm.Events.Attribute.ChangeEventHandler): void {
        throw new Error("Method not implemented.");
    }

    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void {
        throw new Error("Method not implemented.");
    }

    setSubmitMode(submitMode: Xrm.SubmitMode): void {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.StandardControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.StandardControl>;

    abstract getValue(): any;

    abstract setValue(value: any): void;

    setIsValid(isValid: boolean, message?: string): void {
        throw new Error("Method not implemented.");
    }
}