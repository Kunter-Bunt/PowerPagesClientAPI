import { LookupAttribute } from './LookupAttribute';

export class AttributeFactory {
    static createAttribute(logicalName: string) : Xrm.Attributes.Attribute | null {
        let tempElement = document.getElementById(logicalName);
        if (!tempElement)
            throw new Error(`Attribute ${logicalName} not found`);

        let entityField = document.getElementById(logicalName + '_entityname')
        if (entityField)
            return new LookupAttribute(logicalName);

        return null;
    }
}