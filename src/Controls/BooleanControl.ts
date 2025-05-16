import { BooleanAttribute } from "../Attributes/BooleanAttribute";
import { ControlBase } from "./ControlBase";

export class BooleanControl extends ControlBase implements Xrm.Controls.BooleanControl {
    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);
    }

    getAttribute(): BooleanAttribute {
        return new BooleanAttribute(this.logicalName, this.formContext);
    }
}