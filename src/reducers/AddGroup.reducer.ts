import { IAddGroupState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
import { addGroupTypes } from "../actions/addGroup/AddGroup.actions";
const initialState: IAddGroupState = {
  newGroup: new Groups
}

export const addGroupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addGroupTypes.UPDATE_GROUP:
    return{
      ...state

    }
  }
  return state;
}

