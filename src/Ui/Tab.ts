import { SectionCollection } from "./SectionCollection";

export class Tab implements Xrm.Controls.Tab {
    logicalName: string;
    element: HTMLDivElement;
    title: HTMLHeadingElement | null;

    constructor(logicalName: string) {
        this.logicalName = logicalName;
        this.element = document.querySelector(`div[data-name="${logicalName}"]`) as HTMLDivElement;
        if (!this.element)
            throw new Error(`Tab ${this.logicalName} not found`);

        const potentialTitle = this.element.previousElementSibling;
        if (potentialTitle && potentialTitle.tagName === "H2" && potentialTitle.classList.contains("tab-title")) {
            this.title = potentialTitle as HTMLHeadingElement;
        } else {
            this.title = null;
        }    

        this.sections = new SectionCollection(this);
    }

    addTabStateChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    getDisplayState(): Xrm.DisplayState {
        throw new Error("Method not implemented.");
    }

    getName(): string {
        return this.logicalName;
    }

    getParent(): Xrm.Ui {
        throw new Error("Method not implemented.");
    }

    removeTabStateChange(handler: Xrm.Events.ContextSensitiveHandler): void {
        throw new Error("Method not implemented.");
    }

    setDisplayState(displayState: Xrm.DisplayState): void {
        throw new Error("Method not implemented.");
    }

    sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;

    setVisible(visible: boolean): void {
        this.element.style.display = visible ? "block" : "none";

        if (this.title) {
            this.title.style.display = visible ? "block" : "none";
        }
    }

    getVisible(): boolean {
        return this.element.style.display !== "none";
    }

    getLabel(): string {
        throw new Error("Method not implemented.");
    }

    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }

    setFocus(): void {
        throw new Error("Method not implemented.");
    }

}