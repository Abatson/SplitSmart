import { IGroupState } from ".";
import { Groups } from "../models/Groups";
import { GroupTypes } from "../actions/Group/Group.action";

const initialState: IGroupState = {
    currentGroup: new Groups,
}

export const groupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GroupTypes.SET_CURRENT_GROUP:
            return {
                ...state,
                allDebts: action.payload.debts
            }
        case GroupTypes.GET_ALL_GROUPS:
            return {
                ...state,
            }
        case GroupTypes.FAILED_TO_GET_ALL_GROUPS:
            return {
                ...state,
            }
        case GroupTypes.ADD_RECEIPT:
            return {
                ...state,
                allDebts: action.payload.debts
            }
        case GroupTypes.UPDATE_RECEIPT_NAME:
            return {
                ...state,
            }
        case GroupTypes.ADD_LINE_TO_RECEIPT_BUTTON:
            return {
                ...state,
            }
        case GroupTypes.ADD_LINE_TO_RECEIPT:
            return {
                ...state,
                allDebts: action.payload.debts
            }
        case GroupTypes.UPDATE_LINE_NAME_TO_ADD:
            return {
                ...state,
            }
        case GroupTypes.RESET_ADD_LINE_FORM:
            return {
                ...state,
            }
        case GroupTypes.UPDATE_LINE_PRICE_TO_ADD:
            return {
                ...state,
                allDebts: action.payload.debts
            }
        case GroupTypes.RESET_ADD_LINE_NAME_FORM:
            return {
                ...state,
            }
        case GroupTypes.RESET_ADD_LINE_PRICE_FORM:
            return {
                ...state,
            }
        case GroupTypes.FAILED_TO_SET_CURRENT_GROUP:
            return {
                ...state,
            }
    }
    return state;
}