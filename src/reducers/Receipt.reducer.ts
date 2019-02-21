import { IGroupState } from ".";
import { receiptTypes } from "../actions/receipt/Receipt.actions";
import { Line } from "../models/Line";

//this is our intialstate of the interface we declared for the receipt component
const initialState: IGroupState = {
        groupReceipts: [],
}

export const receiptReducer = (state = initialState, action: any) => {
  switch (action.type) {

 
      //same as up above
    case receiptTypes.CLAIM_RECEIPT:
    {
    let newGroupReceipts = state.groupReceipts;
    newGroupReceipts[action.payload.receiptID].claimant;

    return {
        ...state,
        groupReceipts : newGroupReceipts,
    }
    }
    //same as up above
    case receiptTypes.CLAIM_LINE:
    {
        let newGroupReceipts = state.groupReceipts;
        newGroupReceipts[action.payload.receiptID].lines[action.payload.claimed].claimant = action.payload.claimant;
    
        return {
            ...state,
            groupReceipts : newGroupReceipts,
        }
    }

 
  }
  return state;
}