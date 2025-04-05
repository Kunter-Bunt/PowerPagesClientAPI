import { DateTimeAttribute } from "../Attributes/DateTimeAttribute";
import { ControlBase } from "./ControlBase";

export class DateTimeControl extends ControlBase implements Xrm.Controls.DateControl {
    constructor(logicalName: string) {
        super(logicalName);
    }
    
    getShowTime(): boolean {
        throw new Error("Method not implemented.");
    }

    setShowTime(showTimeValue: boolean): void {
        throw new Error("Method not implemented.");
    }

    getAttribute(): DateTimeAttribute {
        return new DateTimeAttribute(this.logicalName);
    }
}