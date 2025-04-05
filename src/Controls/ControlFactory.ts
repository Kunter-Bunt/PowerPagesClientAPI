import { BooleanControl } from "./BooleanControl";
import { DateTimeControl } from "./DateTimeControl";
import { LookupControl } from "./LookupControl";
import { NumberControl } from "./NumberControl";
import { OptionSetControl } from "./OptionSetControl";
import { StringControl } from "./StringControl";

export class ControlFactory {
    static createControl(logicalName: string) : Xrm.Controls.StandardControl | null {
        let tempElement = document.getElementById(logicalName) as HTMLInputElement;
        if (!tempElement)
            throw new Error(`Control ${logicalName} not found`);

        let entityField = document.getElementById(logicalName + '_entityname')
        if (entityField)
            return new LookupControl(logicalName);
        if (tempElement.classList.contains('decimal'))  
            return new NumberControl(logicalName);
        if (tempElement.classList.contains('integer'))  
            return new NumberControl(logicalName);
        if (tempElement.classList.contains('double'))  
            return new NumberControl(logicalName);
        if (tempElement.classList.contains('boolean-radio'))
            return new BooleanControl(logicalName);
        if (tempElement.classList.contains('picklist'))
            return new OptionSetControl(logicalName);
        if (tempElement.classList.contains('datetime'))
            return new DateTimeControl(logicalName);
        if (tempElement.classList.contains('money'))
            return new NumberControl(logicalName);
        if (tempElement.type === 'text')
            return new StringControl(logicalName);

        return null;
    }
}