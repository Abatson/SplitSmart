import { Line } from "./Line";

export class Receipt{


    constructor(id, lines : any = [], name : any = "Unnamed Receipt") {
        this.id = id;
        this.lines = lines; //one receipt can have multiple lines
        this.claimant = -1; //-1 means no claimant
        this.name = name; //the name of the receipt
    }
    
    id : number;
    lines : Line[];
    claimant : number;
    name : any;
  
    

}