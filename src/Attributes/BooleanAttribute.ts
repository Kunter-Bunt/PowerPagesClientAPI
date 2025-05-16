import { AttributeBase } from "./AttributeBase";

export class BooleanAttribute extends AttributeBase implements Xrm.Attributes.BooleanAttribute {
    initialValue: boolean | null;
    radioButtons: NodeListOf<HTMLInputElement>;

    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);

        this.radioButtons = this.element.querySelectorAll('input[type="radio"]');
        this.initialValue = this.getValue();
    }

    getInitialValue(): boolean | null {
        return this.initialValue;
    }

    getValue(): boolean | null {
        for (let i = 0; i < this.radioButtons.length; i++) {
            const radioButton = this.radioButtons[i];
            if (radioButton.checked) {
                return radioButton.value == "1";
            }
        }
        return null;
    }

    setValue(value: boolean): void {
        const valueString = value ? "1" : "0";
        for (let i = 0; i < this.radioButtons.length; i++) {
            const radioButton = this.radioButtons[i];
            radioButton.checked = radioButton.value === valueString;
        }
    }
    
    getAttributeType(): "boolean" {
        return "boolean";
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.BooleanControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.BooleanControl>;
}