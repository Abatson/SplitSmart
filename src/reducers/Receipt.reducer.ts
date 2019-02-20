import { IReceiptState } from ".";
import { receiptTypes } from "../actions/receipt/Receipt.actions";
import { Line } from "../models/Line";

//this is our intialstate of the interface we declared for the receipt component
const initialState: IReceiptState = {
    lines: [],
    claimant: -1
}

export const receiptReducer = (state = initialState, action: any) => {
  switch (action.type) {

 
      //same as up above
    case receiptTypes.CLAIM_RECEIPT:
    return {
        ...state,
        claimant: action.payload.claimant
    }
    //same as up above
    case receiptTypes.CLAIM_LINE:
    {
        let newLines = state.lines;
        newLines[action.payload.claimed] = action.payload.claimant;
        return {
            ...state,
            lines: newLines
        }
    }

 
  }
  return state;
}