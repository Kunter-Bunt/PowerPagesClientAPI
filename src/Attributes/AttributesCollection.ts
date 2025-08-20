import { ItemCollection } from "../Helpers/ItemCollection";
import { AttributeFactory } from "./AttributeFactory";
export class AttributesCollection extends ItemCollection implements Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute<any>> {
    private attributes: Xrm.Attributes.Attribute<any>[] = [];

    constructor(formContext: Xrm.FormContext) {
        const factory = new AttributeFactory(formContext);

    const elements = Array.from(document.querySelectorAll<HTMLInputElement>('input.form-control'));
        const logicalNames = new Set<string>();

        for (const el of elements) {
            if (!el.id) continue;
            let id = el.id;
            if (id.endsWith('_name')) {
                const baseId = id.slice(0, -5); // remove _name
                id = baseId;
            }
            logicalNames.add(id);
        }

        const created: Xrm.Attributes.Attribute<any>[] = [];
        logicalNames.forEach(name => {
            try {
                const attr = factory.createAttribute(name);
                if (attr) created.push(attr as Xrm.Attributes.Attribute<any>);
            } catch (e) {
                console.warn(`Attribute '${name}' could not be instantiated:`, e);
            }
        });

        super(created);
        this.attributes = created;
    }

    get<TSubType extends Xrm.Attributes.Attribute>(name?: unknown): TSubType | null {
        const attr = this.attributes.find(a => a.getName() === name);
        return (attr || null) as unknown as TSubType | null;
    }
}
