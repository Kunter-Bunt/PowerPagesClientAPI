export class Section implements Xrm.Controls.Section {
    logicalName: string;
    element: HTMLDivElement;
    container: HTMLFieldSetElement;
    title: HTMLHeadingElement;

    constructor(logicalName: string) {
        this.logicalName = logicalName;
        this.element = document.querySelector(`table[data-name="${logicalName}"]`) as HTMLDivElement;
        if (!this.element)
            throw new Error(`Section ${this.logicalName} not found`);

        this.container = this.element.closest("fieldset") as HTMLFieldSetElement;
        this.title = this.container.querySelector("legend")?.querySelector("h3") as HTMLHeadingElement;
    }

    getName(): string {
        return this.logicalName;
    }

    getParent(): Xrm.Controls.Tab {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.Control>;

    setVisible(visible: boolean): void {
        this.container.style.display = visible ? "block" : "none";
    }

    getVisible(): boolean {
        return this.container.style.display !== "none";
    }

    getLabel(): string {
        return this.title.innerText;
    }

    setLabel(label: string): void {
        this.title.innerText = label;
    }
}