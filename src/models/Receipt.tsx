import { Line } from "./Line";
import { Users } from "./Users";
import { Groups } from "./Groups";

export class Receipt{


    constructor(receiptId, lines : any = [], receiptName : any = "Unnamed Receipt") {
        this.receiptId = receiptId;
        this.lines = lines; //one receipt can have multiple lines
        this.receiptClaimant = new Users; //-1 means no claimant
        this.receiptName = receiptName; //the name of the receipt\
        this.receiptGroupsId = new Groups
    }
    
    receiptId : number;
    lines : Line[];
    receiptClaimant : Users;
    receiptName : String;
    receiptGroupsId: Groups
  
    

}