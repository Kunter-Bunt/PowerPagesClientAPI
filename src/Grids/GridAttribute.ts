import { GridCell } from "./GridCell";
import { GridCellCollection } from "./GridCellCollection";

interface IGridAttribute {
    getName(): string;
    getRequiredLevel(): Xrm.Attributes.RequirementLevel;
    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void;
    getValue(): string | null;
    setValue(value: string | null): void;
}

export class GridAttribute implements IGridAttribute {
    logicalName: string;
    table: HTMLTableElement;
    private rowIndex: number;
    controls: Xrm.Collection.ItemCollection<GridCell>;

    constructor(table: HTMLTableElement, rowIndex: number, logicalName: string) {
        this.logicalName = logicalName;
        this.table = table;
        this.rowIndex = rowIndex;

        let control = new GridCell(this.table, this.rowIndex, this.logicalName);
        this.controls = new GridCellCollection(control);
    }

    getName(): string {
        return this.logicalName;
    }
    
    getRequiredLevel(): Xrm.Attributes.RequirementLevel {
        return "none";
    }

    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void {
        
    }

    getValue(): string | null {
        return this.getCell().getAttribute("data-value");
    }

    setValue(value: string | null): void {
        this.getCell().setAttribute("data-value", value ?? "");
        var link = this.getCell().querySelector("a");
        if (link)
            link.textContent = value ?? "";
        else
            this.getCell().textContent = value ?? "";
    }

    private getCell(): HTMLTableCellElement {
        return this.table.rows[this.rowIndex].querySelector(`td[data-attribute="${this.logicalName}"]`) as HTMLTableCellElement;
    }
}