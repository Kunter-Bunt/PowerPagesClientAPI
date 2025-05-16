import { AttributeBase } from "./AttributeBase";

export class OptionSetAttribute extends AttributeBase implements Xrm.Attributes.OptionSetAttribute
{
    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);
    }

    getValue(): number | null {
        const value = this.element.value;
        return value ? Number(value) : null;
    }

    setValue(value: number | null): void {
        this.element.value = value ? value.toString() : "";
    }
    
    getFormat(): Xrm.Attributes.OptionSetAttributeFormat {
        throw new Error("Method not implemented.");
    }

    getOption(label: unknown): Xrm.OptionSetValue {
        throw new Error("Method not implemented.");
    }

    getOptions(): Xrm.OptionSetValue[] {
        throw new Error("Method not implemented.");
    }

    getSelectedOption(): Xrm.OptionSetValue {
        throw new Error("Method not implemented.");
    }

    getText(): string {
        throw new Error("Method not implemented.");
    }
    
    getInitialValue(): number | null {
        throw new Error("Method not implemented.");
    }

    getAttributeType(): "optionset" {
        return "optionset";
    }
    
    controls: Xrm.Collection.ItemCollection<Xrm.Controls.OptionSetControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.OptionSetControl>;
}