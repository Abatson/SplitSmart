import { Item } from "./Item";

export class Line{

    constructor(name : string = "Uninitialized Name", itemPrice = 0) {
        this.items = []; //one line has multiple items
        this.claimant = -1; //-1 means its unclaimed
        this.name = name;
        this.itemPrice = itemPrice;
        }

    items : Item[]
    claimant : number; 
    name: string;
    itemPrice: number;
}
