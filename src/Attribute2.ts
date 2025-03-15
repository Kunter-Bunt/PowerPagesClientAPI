export class Attribute2 {
    private attributeName: string;
    private element: HTMLElement;

    constructor(attributeName: string) {
        this.attributeName = attributeName;
        let tempElement = document.getElementById(attributeName);
        if (!tempElement)
            throw new Error(`Attribute ${attributeName} not found`);
        this.element = tempElement;
    }

    public getValue(): any { // TODO, this only works for text
        if (this.element instanceof HTMLInputElement) {
            let nameField = document.getElementById(this.attributeName + '_name');
            let entityField = document.getElementById(this.attributeName + '_entityname')
            if (this.element.type === 'text')
                return this.element.value;
            if (this.element.type === 'checkbox')
                return this.element.checked;
            if (this.element.type === 'hidden' && nameField instanceof HTMLInputElement && entityField instanceof HTMLInputElement) {
                const lookupValue = this.element.value;
                if (lookupValue)
                    return {
                        id: lookupValue,
                        name: nameField.value,
                        entityType: entityField.value
                    };
                else
                    return null;
            }
        }
        if (this.element instanceof HTMLSpanElement) {
            const radioButtons = this.element.querySelectorAll('input[type="radio"]');
            for (let i = 0; i < radioButtons.length; i++) {
                const radioButton = radioButtons[i] as HTMLInputElement;
                if (radioButton.checked) {
                    return radioButton.value;
                }
            }
        }
        if (this.element instanceof HTMLSelectElement) {
            return this.element.value;
        }

        return null;
    }
}