import { AttributeFactory } from './Attributes/AttributeFactory';

export namespace PowerPagesClientAPI {
    export class FormContext implements Xrm.FormContext {
        constructor() {
        }

        data: Xrm.Data = null as unknown as Xrm.Data;

        ui: Xrm.Ui = null as unknown as Xrm.Ui;

        getAttribute<T extends Xrm.Attributes.Attribute>(attributeName?: unknown): T | null {
            return AttributeFactory.createAttribute(attributeName as string) as T;
        }
        
        getControl<T extends Xrm.Controls.Control>(delegateFunction?: unknown): T | Xrm.Controls.Control | Xrm.Collection.ItemCollection<Xrm.Controls.Control> | null {
            throw new Error('Method not implemented.');
        }
    }
}