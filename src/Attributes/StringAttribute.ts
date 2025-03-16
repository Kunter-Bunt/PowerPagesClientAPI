import { AttributeBase } from "./AttributeBase";

export class StringAttribute extends AttributeBase implements Xrm.Attributes.StringAttribute {
    constructor(logicalName: string) {
        super(logicalName);
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

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.StringControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.StringControl>;
}