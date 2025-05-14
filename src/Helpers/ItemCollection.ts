export abstract class ItemCollection implements Xrm.Collection.ItemCollection<any> {
    private items: any[] = [];

    constructor(items: any[]) {
        this.items = items;
    }

    getLength(): number {
        return this.items.length;
    }

    abstract get(name: any): any | null;

    forEach(callback: (item: any, index: number) => void): void {
        this.items.forEach(callback);
    }
}