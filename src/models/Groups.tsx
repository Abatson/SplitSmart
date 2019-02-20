import { Users } from "./Users";
import { Url } from "url";

export class Groups {
    groupId: Number;
    groupName: String;
    groupMembers: Users[];
    groupReceipts: Receipts[];
    groupPicture: Url;
    groupOwner: Users;
    groupDescription: String;

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