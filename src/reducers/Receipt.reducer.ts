import { IGroupState } from ".";
import { receiptTypes } from "../actions/receipt/Receipt.actions";
import { Receipt } from "../models/Receipt";
import { Line } from "../models/Line";
import { Item } from "../models/Item";

//this is our intialstate of the interface we declared for the receipt component
const initialState: IGroupState = {
        groupReceipts: []
        
        
}



export const receiptReducer = (state = initialState, action: any) => {
  switch (action.type) {

    
      //same as up above
      case receiptTypes.INITIALIZE_RECEIPTS:
      {
        { //set receipts to be action.payload.data take a group id and fetch every receipt from that group id
          return {
              ...state,
              groupReceipts : action.payload.receipt,
          }
          }
        }
     
 
      //same as up above
    case receiptTypes.CLAIM_RECEIPT:
    {
      let newGroupReceipts = state.groupReceipts.slice()
    newGroupReceipts[action.payload.receiptID].claimant = action.payload.claimant;

    return {
        ...state,
        groupReceipts : newGroupReceipts,
    }
    }
    //same as up above
    case receiptTypes.CLAIM_LINE:
    {
      let newGroupReceipts = state.groupReceipts.slice()
      newGroupReceipts[action.payload.receiptID].lines[action.payload.claimed].items = 
      newGroupReceipts[action.payload.receiptID].lines[action.payload.claimed].items.concat((() => { let l = new Item(action.payload.claimant); l.claimant = action.payload.claimant; return [l];}) )
      newGroupReceipts = newGroupReceipts.slice();
      //newGroupReceipts =

        //newGroupReceipts[action.payload.receiptID].lines[action.payload.claimed].claimant = action.payload.claimant;
    
        return {
            ...state,
            groupReceipts : newGroupReceipts,
        }
    }

 
  }
  return state;
}