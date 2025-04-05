import { OptionSetAttribute } from "../Attributes/OptionSetAttribute";
import { ControlBase } from "./ControlBase";

export class OptionSetControl extends ControlBase implements Xrm.Controls.OptionSetControl
{
    constructor(logicalName: string) {
        super(logicalName);
    }
    
    addOption(option: Xrm.OptionSetValue, index?: number): void {
        throw new Error("Method not implemented.");
    }

    clearOptions(): void {
        throw new Error("Method not implemented.");
    }

    removeOption(value: number): void {
        throw new Error("Method not implemented.");
    }

    getOptions(): Xrm.OptionSetValue[] {
        throw new Error("Method not implemented.");
    }

    getAttribute(): OptionSetAttribute {
        return new OptionSetAttribute(this.logicalName);
    }
}