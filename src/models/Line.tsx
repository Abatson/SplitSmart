import { Item } from "./Item";

export class Line{

    constructor(name : string = "Uninitialized Name") {
        this.items = []; //one line has multiple items
        this.claimant = -1; //-1 means its unclaimed
        this.name = name;
        }

    items : Item[]
    claimant : number; 
    name: string;
}
