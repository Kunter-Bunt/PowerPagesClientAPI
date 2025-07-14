import { GridAttributeCollection } from "./GridAttributeCollection";

export class GridEntity implements Xrm.Controls.Grid.GridEntity {
    private table: HTMLTableElement;
    private rowIndex: number;
    attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute>;

    constructor(table: HTMLTableElement, rowIndex: number) {
        this.table = table;
        this.rowIndex = rowIndex;
        this.attributes = new GridAttributeCollection(table, rowIndex);
    }

    getEntityName(): string {
        return this.getRow().getAttribute("data-entity") || "";
    }

    getEntityReference(): Xrm.LookupValue {
        const row = this.getRow();
        return {
            id: row.getAttribute("data-id") || "",
            entityType: row.getAttribute("data-entity") || "",
            name: row.getAttribute("data-name") || ""
        } as Xrm.LookupValue;
    }

    getId(): string {
        return this.getRow().getAttribute("data-id") || "";
    }

    getPrimaryAttributeValue(): string {
        return this.getRow().getAttribute("data-name") || "";
    }

    private getRow(): HTMLTableRowElement {
        return this.table.rows[this.rowIndex] as HTMLTableRowElement;
    }
}