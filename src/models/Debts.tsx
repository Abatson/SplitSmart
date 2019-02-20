export class Debts{
    debtId:number;
    sender:string;
    claiment:string;
    amount:number;
    timestamp:string;
    status: boolean;

    constructor() {
        this.debtId = 0;
        this.sender = '';
        this.claiment = '';
        this.amount = 0;
        this.timestamp = '';
        this.status = false;
    }
    
}