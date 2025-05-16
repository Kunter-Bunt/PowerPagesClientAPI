import { AttributeBase } from "./AttributeBase";

export class NumberAttribute extends AttributeBase implements Xrm.Attributes.NumberAttribute
{
    type: Xrm.Attributes.AttributeType;

    constructor(logicalName: string, formContext: Xrm.FormContext, type: Xrm.Attributes.AttributeType) {
        super(logicalName, formContext);
        this.type = type;
    }
    
    getValue(): number | null {
        const value = this.element.value;
        return value ? Number(value) : null;
    }

    setValue(value: number | null): void {
        this.element.value = value ? value.toString() : "";
    }
  
    getFormat(): Xrm.Attributes.IntegerAttributeFormat {
        throw new Error("Method not implemented.");
    }

    getMax(): number {
        throw new Error("Method not implemented.");
    }

    getMin(): number {
        throw new Error("Method not implemented.");
    }

    getPrecision(): number {
        throw new Error("Method not implemented.");
    }

    setPrecision(precision: number): void {
        throw new Error("Method not implemented.");
    }

    getAttributeType(): Xrm.Attributes.AttributeType {
        return this.type;
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.NumberControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.NumberControl>;
}