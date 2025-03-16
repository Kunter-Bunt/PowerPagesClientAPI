import { BooleanAttribute } from './BooleanAttribute';
import { DateTimeAttribute } from './DateTimeAttribute';
import { LookupAttribute } from './LookupAttribute';
import { NumberAttribute } from './NumberAttribute';
import { OptionSetAttribute } from './OptionSetAttribute';
import { StringAttribute } from './StringAttribute';

export class AttributeFactory {
    static createAttribute(logicalName: string) : Xrm.Attributes.Attribute | null {
        let tempElement = document.getElementById(logicalName) as HTMLInputElement;
        if (!tempElement)
            throw new Error(`Attribute ${logicalName} not found`);

        let entityField = document.getElementById(logicalName + '_entityname')
        if (entityField)
            return new LookupAttribute(logicalName);
        if (tempElement.classList.contains('decimal'))  
            return new NumberAttribute(logicalName);
        if (tempElement.classList.contains('integer'))  
            return new NumberAttribute(logicalName);
        if (tempElement.classList.contains('double'))  
            return new NumberAttribute(logicalName);
        if (tempElement.classList.contains('boolean-radio'))
            return new BooleanAttribute(logicalName);
        if (tempElement.classList.contains('picklist'))
            return new OptionSetAttribute(logicalName);
        if (tempElement.classList.contains('datetime'))
            return new DateTimeAttribute(logicalName);
        if (tempElement.classList.contains('money'))
            return new NumberAttribute(logicalName);
        if (tempElement.type === 'text')
            return new StringAttribute(logicalName);

        return null;
    }
}