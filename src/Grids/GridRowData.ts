import { GridEntity } from "./GridEntity";

export class GridRowData implements Xrm.Controls.Grid.GridRowData {
    private table: HTMLTableElement;
    private rowIndex: number;
    entity: Xrm.Controls.Grid.GridEntity;

    constructor(table: HTMLTableElement, rowIndex: number) {
        this.table = table;
        this.rowIndex = rowIndex;
        this.entity = new GridEntity(table, rowIndex);
    }
    
    getEntity(): Xrm.Controls.Grid.GridEntity {
        return this.entity;
    }
}