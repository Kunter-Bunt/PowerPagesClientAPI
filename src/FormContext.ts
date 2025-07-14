import { AttributeFactory } from './Attributes/AttributeFactory';
import { ControlFactory } from './Controls/ControlFactory';
import { Ui } from './Ui/Ui';

export class FormContext implements Xrm.FormContext {
    private attributeFactory: AttributeFactory;
    private controlFactory: ControlFactory;

    constructor() {
        this.ui = new Ui();
        this.attributeFactory = new AttributeFactory(this);
        this.controlFactory = new ControlFactory(this);
    }

    data: Xrm.Data = null as unknown as Xrm.Data;

    ui: Xrm.Ui;

    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName?: unknown): T | null {
        return this.attributeFactory.createAttribute(attributeName as string) as T;
    }
    
    getControl<T extends Xrm.Controls.StandardControl>(attributeName?: unknown): T | null {
        return this.controlFactory.createControl(attributeName as string) as T;
    }
}