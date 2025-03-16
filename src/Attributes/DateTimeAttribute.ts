import { AttributeBase } from "./AttributeBase";

export class DateTimeAttribute extends AttributeBase implements Xrm.Attributes.DateAttribute {
    displayElement: HTMLInputElement;
    
    constructor(logicalName: string) {
        super(logicalName);

        this.displayElement = document.getElementById(logicalName + '_datepicker_description') as HTMLInputElement;
    }

    getValue(): Date | null {
        return new Date(this.element.value);
    }

    setValue(value: Date): void {
        this.element.value = value.toUTCString();
        this.displayElement.value = value.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    }

    getFormat(): Xrm.Attributes.DateAttributeFormat {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.DateControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.DateControl>;
}