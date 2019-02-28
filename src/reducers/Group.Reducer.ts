import { IGroupState } from ".";
import { Groups } from "../models/Groups";

const initialState: IGroupState = {
    currentGroup: new Groups, 
    allGroups: []
}

export const groupReducer  = (state = initialState, action: any) => {
    return state
}