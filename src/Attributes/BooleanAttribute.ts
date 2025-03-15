export class BooleanAttribute extends AttributeBase implements Xrm.Attributes.BooleanAttribute {
    initialValue: boolean;

    constructor(logicalName: string) {
        super(logicalName);

        this.initialValue = this.element.checked;
    }

    getInitialValue(): boolean | null {
        return this.initialValue;
    }

    getValue(): boolean {
        return this.element.checked;
    }

    setValue(value: boolean): void {
        this.element.checked = value;
    }
    
    getAttributeType(): "boolean" {
        return "boolean";
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.BooleanControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.BooleanControl>;
}