import { ItemCollection } from "../Helpers/ItemCollection";
import { Tab } from "./Tab";

export class TabCollection extends ItemCollection implements Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
    constructor(parent?: Xrm.Ui) {
        const tabElements = document.querySelectorAll('div.tab');
        
        const tabs = Array.from(tabElements)
            .filter(_ => _.getAttribute('data-name'))
            .map(_ => {
                const dataName = _.getAttribute('data-name')!;
                return new Tab(dataName, parent);
            });
        
        super(tabs);
        this.tabs = tabs;
    }

    tabs: Tab[];

    get<TSubType extends Xrm.Controls.Tab>(name?: unknown): TSubType | null {
        const tab = this.tabs.find((tab: Tab) => tab.getName() === name);
        return tab as unknown as TSubType || null;
    }
}