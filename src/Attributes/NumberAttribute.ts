export class NumberAttribute extends AttributeBase implements Xrm.Attributes.NumberAttribute
{
    constructor(logicalName: string) {
        super(logicalName);
    }
    
    getValue(): number | null {
        const value = this.element.value;
        return value ? Number(value) : null;
    }

    setValue(value: any): void {
        this.element.value = value;
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

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.NumberControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.NumberControl>;
}