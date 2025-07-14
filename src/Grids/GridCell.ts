interface IGridCell {
    getLabel(): string;
    getDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    setNotification(message: string, uniqueId: string): void;
    clearNotification(uniqueId: string): void;
}

export class GridCell implements IGridCell {
    logicalName: string;
    private table: HTMLTableElement;
    private rowIndex: number;

    constructor(table: HTMLTableElement, rowIndex: number, logicalName: string) {
        this.table = table;
        this.rowIndex = rowIndex;
        this.logicalName = logicalName;
        const row = this.table.rows[this.rowIndex] as HTMLTableRowElement;
    }
    
    getLabel(): string {
        const thead = this.table.tHead;
        if (!thead || thead.rows.length === 0) return '';
        const headerRow = thead.rows[0];
        const headerCell = headerRow.cells[this.getCell().cellIndex];
        return headerCell?.textContent?.trim() || '';
    }

    getDisabled(): boolean {
        return true;
    }

    setDisabled(disabled: boolean): void {
        
    }

    setNotification(message: string, uniqueId: string): void {

    }

    clearNotification(uniqueId: string): void {

    }
    
    private getCell(): HTMLTableCellElement {
        return this.table.rows[this.rowIndex].querySelector(`td[data-attribute="${this.logicalName}"]`) as HTMLTableCellElement;
    }
}