import { ItemCollection } from "../Helpers/ItemCollection";
import { GridCell } from "./GridCell";

export class GridCellCollection extends ItemCollection implements Xrm.Collection.ItemCollection<GridCell> {
    private cell: GridCell;

    constructor(cell: GridCell) {
        super([cell]);
        this.cell = cell;
    }

    get<T extends GridCell>(name?: unknown): T | null {
        if (typeof name === 'string' && name === this.cell.logicalName) {
            return this.cell as unknown as T;
        }
        if (typeof name === 'number' && name === 0) {
            return this.cell as unknown as T;
        }
        return null;
    }
}
