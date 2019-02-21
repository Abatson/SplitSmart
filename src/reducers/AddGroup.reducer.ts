import { IAddGroupState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
const initialState: IAddGroupState = {
  user: new Users,
  allUsers: [],
  newGroup: new Groups,
  picture: {
    port: '',
    query: ''
  },
  groupDescription: '',
  groupName: ''
}

export const addGroupReducer = (state = initialState, action: any) => {

}