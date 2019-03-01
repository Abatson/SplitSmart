import { Item } from "./Item";

export class Line{

    constructor(name : string = "Uninitialized Name", linePrice = 0) {
        this.items = []; //one line has multiple items
        this.name = name;
        this.linePrice = linePrice;
        this.lineId = 0;
        this.lineReceipt = 0;
        }

    items : Item[]
    name: string;
    linePrice: number;
    lineId:number;
    lineReceipt:number;
}