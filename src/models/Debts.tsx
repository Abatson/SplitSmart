import {Users} from './Users'

export class Debts{
    debtId:number;
    sender:Users;
    claimer:Users;
    amount:number;
    timestamp:string;
    paid: boolean;
    verified: boolean;

    constructor() {
        this.debtId = 0;
        this.sender = new Users;
        this.claimer = new Users;
        this.amount = 0;
        this.timestamp = '';
        this.paid = false;
        this.verified = false;
    }
    
}