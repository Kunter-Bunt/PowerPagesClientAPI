import { AttributeFactory } from './Attributes/AttributeFactory';
import { ControlFactory } from './Controls/ControlFactory';

export namespace PowerPagesClientAPI {
    export class FormContext implements Xrm.FormContext {
        constructor() {
        }

        data: Xrm.Data = null as unknown as Xrm.Data;

        ui: Xrm.Ui = null as unknown as Xrm.Ui;

        getAttribute<T extends Xrm.Attributes.Attribute>(attributeName?: unknown): T | null {
            return AttributeFactory.createAttribute(attributeName as string) as T;
        }
        
        getControl<T extends Xrm.Controls.StandardControl>(attributeName?: unknown): T | null {
            return ControlFactory.createControl(attributeName as string) as T;
        }
    }
}