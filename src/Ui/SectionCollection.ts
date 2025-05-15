import { ItemCollection } from "../Helpers/ItemCollection";
import { Section } from "./Section";

export class SectionCollection extends ItemCollection implements Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
    constructor(tab: Xrm.Controls.Tab) {
        const tabElement = document.querySelector(`div[data-name="${tab.getName()}"]`) as HTMLDivElement;
        const sectionElements = tabElement.querySelectorAll('table.section');
        
        const sections = Array.from(sectionElements)
            .filter(_ => _.getAttribute('data-name'))
            .map(_ => {
                const dataName = _.getAttribute('data-name')!;
                return new Section(dataName, tab);
            });
        
        super(sections);
        this.sections = sections;
    }

    sections: Section[];

    get<TSubType extends Xrm.Controls.Section>(name?: unknown): TSubType | null {
        const tab = this.sections.find((tab: Section) => tab.getName() === name);
        return tab as unknown as TSubType || null;
    }
}