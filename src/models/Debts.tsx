export class Debts{
    debtId:number;
    sender:string;
    claimer:string;
    amount:number;
    timestamp:string;
    paid: boolean;
    verified: boolean;

    constructor() {
        this.debtId = 0;
        this.sender = '';
        this.claimer = '';
        this.amount = 0;
        this.timestamp = '';
        this.paid = false;
        this.verified = false;
    }
    
}