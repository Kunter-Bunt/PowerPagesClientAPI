export abstract class ControlBase implements Xrm.Controls.StandardControl {
    logicalName: string;
    element: HTMLInputElement;
    labelElement: HTMLLabelElement;
    containerElement: HTMLTableCellElement;
    formContext: Xrm.FormContext;

    constructor(logicalName: string, formContext: Xrm.FormContext) {
        this.logicalName = logicalName;
        this.formContext = formContext;
        
        this.element = document.getElementById(logicalName) as HTMLInputElement;

        if (!this.element)
            throw new Error(`Control ${this.logicalName} not found`);

        this.labelElement = document.getElementById(logicalName + "_label") as HTMLLabelElement;
        this.containerElement = this.element.closest("td") as HTMLTableCellElement;
    }

    clearNotification(uniqueId?: string): boolean {
        throw new Error("Method not implemented.");
    }

    setNotification(message: string, uniqueId: string): boolean {
        throw new Error("Method not implemented.");
    }

    addNotification(notification: Xrm.Controls.AddControlNotificationOptions): void {
        throw new Error("Method not implemented.");
    }

    addOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    removeOnOutputChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    getOutputs(): { [index: string]: Xrm.Controls.FieldControlOutput; } {
        throw new Error("Method not implemented.");
    }

    getControlType(): Xrm.Controls.ControlType | string {
        throw new Error("Method not implemented.");
    }

    getName(): string {
        return this.logicalName;
    }

    getParent(): Xrm.Controls.Section {
        throw new Error("Method not implemented.");
    }

    getLabel(): string {
        throw new Error("Method not implemented.");
    }

    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }

    getVisible(): boolean {
        return this.containerElement.style.display !== "none";
    }

    setVisible(visible: boolean): void {
        this.containerElement.style.display = visible ? "" : "none";
    }

    setFocus(): void {
        throw new Error("Method not implemented.");
    }

    getDisabled(): boolean {
        throw new Error("Method not implemented.");
    }

    setDisabled(disabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    abstract getAttribute(): Xrm.Attributes.Attribute<any>;
}