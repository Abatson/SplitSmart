import { Users } from "./Users";

export class Item {

    
    constructor(claimant) {
        this.claimant = claimant;
        this.itemLine = 0;
        this.itemId = 0;
    }
    itemId:number
    claimant : Users;
    itemLine:number;
}