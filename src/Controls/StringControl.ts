import { StringAttribute } from "../Attributes/StringAttribute";
import { ControlBase } from "./ControlBase";

export class StringControl extends ControlBase implements Xrm.Controls.StringControl {
    constructor(logicalName: string) {
        super(logicalName);
    }

    getAttribute(): StringAttribute {
        return new StringAttribute(this.logicalName);
    }
}