export class DateAttribute extends AttributeBase implements Xrm.Attributes.DateAttribute {
    constructor(logicalName: string) {
        super(logicalName);
    }

    getValue(): Date | null {
        return new Date(this.element.value);
    }

    setValue(value: Date): void {
        this.element.value = value.toISOString();
    }

    getFormat(): Xrm.Attributes.DateAttributeFormat {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.DateControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.DateControl>;
}