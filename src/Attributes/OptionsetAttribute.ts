export class OptionSetAttribute extends AttributeBase implements Xrm.Attributes.OptionSetAttribute
{
    radioButtons: NodeListOf<HTMLInputElement>;

    constructor(logicalName: string) {
        super(logicalName);
        this.radioButtons = this.element.querySelectorAll('input[type="radio"]');
    }

    getValue(): number | null {
        for (let i = 0; i < this.radioButtons.length; i++) {
            const radioButton = this.radioButtons[i];
            if (radioButton.checked) {
                return Number(radioButton.value);
            }
        }
        return null;
    }

    setValue(value: number | null): void {
        for (let i = 0; i < this.radioButtons.length; i++) {
            const radioButton = this.radioButtons[i];
            radioButton.checked = Number(radioButton.value) === value;
        }
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

    
    controls: Xrm.Collection.ItemCollection<Xrm.Controls.OptionSetControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.OptionSetControl>;
}