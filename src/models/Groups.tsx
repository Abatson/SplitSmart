import { Users } from "./Users";
import { Url } from "url";

export class Groups {
    groupId: number;
    groupName: string;
    groupMembers: Users[];
    groupReceipts: Receipts[];
    groupPicture: Url;
    groupOwner: Users;
    groupDescription: string;

    constructor() {
        this.groupId = 0;
        this.groupName = '';
        this.groupMembers = [];
        this.groupReceipts = [];
        this.groupPicture = {
            port: '',
            query: ''
        };
        this.groupOwner = new Users;
        this.groupDescription = '';
    }
}