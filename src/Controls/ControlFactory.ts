import { GridControl } from "../Grids/GridControl";
import { BooleanControl } from "./BooleanControl";
import { DateTimeControl } from "./DateTimeControl";
import { LookupControl } from "./LookupControl";
import { NumberControl } from "./NumberControl";
import { OptionSetControl } from "./OptionSetControl";
import { StringControl } from "./StringControl";

export class ControlFactory {
    formContext: Xrm.FormContext;

    constructor(formContext: Xrm.FormContext) {
        this.formContext = formContext;
    }

    createControl(logicalName: string) : Xrm.Controls.StandardControl | null {
        let tempElement = document.getElementById(logicalName) as HTMLInputElement;
        if (!tempElement)
            throw new Error(`Control ${logicalName} not found`);

        let entityField = document.getElementById(logicalName + '_entityname')
        if (entityField)
            return new LookupControl(logicalName, this.formContext);
        if (tempElement.classList.contains('decimal'))  
            return new NumberControl(logicalName, this.formContext, 'decimal');
        if (tempElement.classList.contains('integer'))  
            return new NumberControl(logicalName, this.formContext, 'integer');
        if (tempElement.classList.contains('double'))  
            return new NumberControl(logicalName, this.formContext, 'double');
        if (tempElement.classList.contains('boolean-radio'))
            return new BooleanControl(logicalName, this.formContext);
        if (tempElement.classList.contains('picklist'))
            return new OptionSetControl(logicalName, this.formContext);
        if (tempElement.classList.contains('datetime'))
            return new DateTimeControl(logicalName, this.formContext);
        if (tempElement.classList.contains('money'))
            return new NumberControl(logicalName, this.formContext, 'money');
        if (tempElement.classList.contains('subgrid'))
            return new GridControl(logicalName, this.formContext);
        if (tempElement.type === 'text')
            return new StringControl(logicalName, this.formContext);

        return null;
    }
}