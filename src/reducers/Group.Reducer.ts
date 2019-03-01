import { IGroupsState } from ".";
import { Groups } from "../models/Groups";
import { GroupTypes, setCurrentGroup } from "../actions/Group/Group.action";
import { Receipt } from "../models/Receipt";
import { Line } from "../models/Line";

const initialState: IGroupsState = {
    allGroups: [],
    currentGroup: new Groups,
    newReceipt: new Receipt,
    newLine: new Line,
}

export const groupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GroupTypes.SET_CURRENT_GROUP:
            return {
                ...state,
                newReceipt: action.payload.currentGroup
                
            }
        case GroupTypes.GET_ALL_GROUPS:
            return {
                ...state,
                allGroups: action.payload.groups
            }
        case GroupTypes.FAILED_TO_GET_ALL_GROUPS:
            return {
                ...state,
            }
        case GroupTypes.ADD_RECEIPT:
            return {
                ...state,
                newReceipt: action.payload.receipt,
            }
        case GroupTypes.UPDATE_RECEIPT_NAME:
            return {
                ...state,
                newReceipt: {
                    ...state.newReceipt,
                    receiptName: action.payload.receiptName,
                }
            }
        case GroupTypes.ADD_LINE_TO_RECEIPT:
            return {
                ...state,
                newLine: action.payload.newLine
            }
        case GroupTypes.UPDATE_LINE_NAME_TO_ADD:
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    lineName: action.payload.lineNameToAdd
                }
            }
        case GroupTypes.RESET_ADD_LINE_FORM:
            return {
                ...state,
                newLine: new Line
            }
        case GroupTypes.UPDATE_LINE_PRICE_TO_ADD:
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    linePrice: action.payload.linePriceToAdd
                }
            }
        case GroupTypes.RESET_ADD_LINE_NAME_FORM:
            return {
                ...state,
                newLine: {
                    ...state.newLine,
                    lineName: ''
                }
            }
        case GroupTypes.RESET_ADD_LINE_PRICE_FORM:
            return {
                ...state,
                newLine: {
                    ...state,
                    linePrice: action.payload.linePriceToAdd
                }
            }
        case GroupTypes.FAILED_TO_SET_CURRENT_GROUP:
            return {
                ...state,
            }
    }
    return state;
}