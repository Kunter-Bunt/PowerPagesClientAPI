import { ItemCollection } from "../Helpers/ItemCollection";
import { GridAttribute } from "./GridAttribute";

export class GridAttributeCollection extends ItemCollection implements Xrm.Collection.ItemCollection<GridAttribute> {

    constructor(table: HTMLTableElement, rowIndex: number) {
        const row = table.rows[rowIndex] as HTMLTableRowElement;
        const cells = Array.from(row.querySelectorAll('td[data-attribute]')) as HTMLTableCellElement[];
        const attributes = cells.map(cell => {
            const name = cell.getAttribute('data-attribute') || '';
            return new GridAttribute(table, rowIndex, name);
        });
        super(attributes);
    }

    get<T extends GridAttribute>(name?: unknown): T | null {
        let found: GridAttribute | undefined;
        if (typeof name === "string") {
            found = this.items.find(item => item.getName() === name);
        } else if (typeof name === "number") {
            found = this.items[name];
        }
        return (found as unknown as T) || null;
    }
}
