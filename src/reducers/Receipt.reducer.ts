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
        let receiptTest:Receipt[] = [];
        let receiptLines : any =  [];
        receiptLines.push(new Line("Coffee"), new Line("Bagel"), new Line("Fruit"));
        receiptLines[0].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
        receiptLines[1].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
        receiptLines[2].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
        receiptTest.push(new Receipt(0, receiptLines, "Mario's Cantina"), new Receipt(1, receiptLines, "Lucy's Bistro"), new Receipt(2, receiptLines, "McDonalds"));

   
      return {
          ...state,
          groupReceipts : receiptTest,
      }
      }
 
      //same as up above
    case receiptTypes.CLAIM_RECEIPT:
    {
    let newGroupReceipts = state.groupReceipts;
    newGroupReceipts[action.payload.receiptID].claimant = action.payload.claimant;

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