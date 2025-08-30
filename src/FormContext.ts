import { AttributeFactory } from './Attributes/AttributeFactory';
import { ControlFactory } from './Controls/ControlFactory';
import { Ui } from './Ui/Ui';
import { Data } from './Data/Data';

export class FormContext implements Xrm.FormContext {
    private attributeFactory: AttributeFactory;
    private controlFactory: ControlFactory;

    constructor() {
        this.ui = new Ui(this);
        this.attributeFactory = new AttributeFactory(this);
        this.controlFactory = new ControlFactory(this);
        this.data = new Data(this);
    }

    data: Xrm.Data;

    ui: Xrm.Ui;

    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName?: unknown): T | null {
        return this.attributeFactory.createAttribute(attributeName as string) as T;
    }
    
    getControl<T extends Xrm.Controls.StandardControl>(attributeName?: unknown): T | null {
        return this.controlFactory.createControl(attributeName as string) as T;
    }
}