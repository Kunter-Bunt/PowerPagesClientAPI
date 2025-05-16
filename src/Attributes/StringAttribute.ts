import { AttributeBase } from "./AttributeBase";

export class StringAttribute extends AttributeBase implements Xrm.Attributes.StringAttribute {
    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);
    }

    getValue(): string {
        return this.element.value;
    }

    setValue(value: string): void {
        this.element.value = value;
    }

    getMaxLength(): number {
        throw new Error("Method not implemented.");
    }

    getFormat(): Xrm.Attributes.StringAttributeFormat {
        throw new Error("Method not implemented.");
    }

    getAttributeType(): "string" {
        return "string";
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.StringControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.StringControl>;
}