import { ItemCollection } from "../Helpers/ItemCollection";
import { GridRow } from "./GridRow";

export class GridRowCollection extends ItemCollection implements Xrm.Collection.ItemCollection<GridRow> {
    constructor(rowElements: HTMLTableRowElement[]) {
        const rows = rowElements
            .filter(row => row.getAttribute('data-id') || row.getAttribute('data-name'))
            .map(row => {
                const table = row.closest('table') as HTMLTableElement;
                const index = Array.prototype.indexOf.call(table.rows, row);
                return new GridRow(table, index);
            });

        super(rows);
        this.rows = rows;
    }

    rows: GridRow[];

    get<TSubType extends Xrm.Controls.Grid.GridRow>(name?: unknown): TSubType | null {
        let row = this.rows.find((row: GridRow) => row.data.entity.getPrimaryAttributeValue() === name);
        if (!row) 
            row = this.rows.find((row: GridRow) => row.data.entity.getId() === name);
        if (!row && typeof name === 'number')
            row = this.rows[name];

        return row as unknown as TSubType || null;
    }
}