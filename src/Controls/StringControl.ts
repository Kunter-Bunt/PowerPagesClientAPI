import { StringAttribute } from "../Attributes/StringAttribute";
import { ControlBase } from "./ControlBase";

export class StringControl extends ControlBase implements Xrm.Controls.StringControl {
    constructor(logicalName: string, formContext: Xrm.FormContext) {
        super(logicalName, formContext);
    }

    getAttribute(): StringAttribute {
        return new StringAttribute(this.logicalName, this.formContext);
    }
}