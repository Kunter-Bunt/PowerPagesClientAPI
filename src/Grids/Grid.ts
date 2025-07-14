import { GridRowCollection } from "./GridRowCollection";

export class Grid implements Xrm.Controls.Grid {
    logicalName: string;
    formContext: Xrm.FormContext;
    grid: HTMLTableElement;

    constructor(logicalName: string, formContext: Xrm.FormContext) {
        this.logicalName = logicalName;
        this.formContext = formContext;
        this.grid = document.getElementById(logicalName)?.querySelector("table") as HTMLTableElement;

        if (!this.grid) {
            throw new Error(`Grid ${this.logicalName} not found`);
        }
    }

    getRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
        return new GridRowCollection(Array.from(this.grid.querySelectorAll('tr')));
    }

    // Selection is not supported in Power Pages
    getSelectedRows(): Xrm.Collection.ItemCollection<Xrm.Controls.Grid.GridRow> {
        return new GridRowCollection([]);
    }

    getTotalRecordCount(): number {
        // would need a post to the data-get-url, to read the ItemCount in the response
        throw new Error("Method not implemented."); 
    }
}