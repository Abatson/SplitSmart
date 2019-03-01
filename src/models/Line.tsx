import { Item } from "./Item";

export class Line{

    constructor(name : string = "Uninitialized Name", itemPrice = 0) {
        this.items = []; //one line has multiple items
        this.name = name;
        this.itemPrice = itemPrice;
        }

    items : Item[]
    name: string;
    itemPrice: number;
}
