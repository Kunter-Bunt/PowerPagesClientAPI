import { BooleanAttribute } from "../Attributes/BooleanAttribute";
import { ControlBase } from "./ControlBase";

export class BooleanControl extends ControlBase implements Xrm.Controls.BooleanControl {
    constructor(logicalName: string) {
        super(logicalName);
    }

    getAttribute(): BooleanAttribute {
        return new BooleanAttribute(this.logicalName);
    }
}