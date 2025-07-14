import { GridRowData } from "./GridRowData";

export class GridRow implements Xrm.Controls.Grid.GridRow {
    private table: HTMLTableElement;
    private rowIndex: number;

    constructor(table: HTMLTableElement, rowIndex: number) {
        this.table = table;
        this.rowIndex = rowIndex;
    }

    public get data(): any {
        return this.getData();
    }

    getData(): Xrm.Controls.Grid.GridRowData {
        return new GridRowData(this.table, this.rowIndex);
    }
}