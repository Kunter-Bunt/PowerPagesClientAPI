import { NumberAttribute } from "../Attributes/NumberAttribute";
import { ControlBase } from "./ControlBase";

export class NumberControl extends ControlBase implements Xrm.Controls.NumberControl {
    constructor(logicalName: string) {
        super(logicalName);
    }

    getAttribute(): NumberAttribute {
        return new NumberAttribute(this.logicalName);
    }
}