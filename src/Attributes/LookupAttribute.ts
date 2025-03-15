export class LookupAttribute extends AttributeBase implements Xrm.Attributes.LookupAttribute
{
    entity: HTMLInputElement;
    name: HTMLInputElement;

    constructor(logicalName: string) {
        super(logicalName);

        this.entity = document.getElementById(logicalName + '_entityname') as HTMLInputElement;
        this.name = document.getElementById(logicalName + '_name') as HTMLInputElement;

        if (!this.element || !this.entity || !this.name)
            throw new Error(`Attribute ${this.logicalName} not found`);
    }

    getValue(): Xrm.LookupValue[] {
        return [{
            id: this.element.value,
            name: this.name.value,
            entityType: this.entity.value
        }];
    }

    setValue(value: Xrm.LookupValue[]): void {
        if (!value || value.length == 0)
            value = [{ id: "", name: "", entityType: "" }];
        this.element.value = value[0].id;
        this.entity.value = value[0].entityType;
        if (value[0].name)
            this.name.value = value[0].name;
    }    
    
    getIsPartyList(): boolean {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.LookupControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.LookupControl>;
}