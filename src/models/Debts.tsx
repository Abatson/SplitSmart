export class Debts{
    debtId:number;
    sender:string;
    reciever:string;
    amount:number;
    items:string[];
    timestamp:string;
    status: boolean;

    constructor() {
        this.debtId = 0;
        this.sender = '';
        this.reciever = '';
        this.amount = 0;
        this.items = [];
        this.timestamp = '';
        this.status = false;
    }
    
}