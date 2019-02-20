import { Line } from "./Line";

export class Receipt{


    constructor(lines) {
        this.lines = []; //one receipt can have multiple lines
        this.claimants = []; //one receipt can have multiple claimants
    }
    
 
    lines : Line[];
    claimants : number[];
  
    

}