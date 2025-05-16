import { NumberAttribute } from "../Attributes/NumberAttribute";
import { ControlBase } from "./ControlBase";

export class NumberControl extends ControlBase implements Xrm.Controls.NumberControl {
    constructor(logicalName: string, formContext: Xrm.FormContext, type: Xrm.Attributes.AttributeType) {
        super(logicalName, formContext);
        this.type = type;
    }

    type: Xrm.Attributes.AttributeType;

    getAttribute(): NumberAttribute {
        return new NumberAttribute(this.logicalName, this.formContext, this.type);
    }
}