import { Item } from "./Item";

export class Line{

    constructor(lineName : string = "Uninitialized Name", linePrice = 0) {
        this.items = []; //one line has multiple items
        this.lineName = lineName;
        this.linePrice = linePrice;
        this.lineId = 0;
        this.lineReceipt = 0;
        }

    items : Item[]
    lineName: string;
    linePrice: number;
    lineId:number;
    lineReceipt:number;
}
