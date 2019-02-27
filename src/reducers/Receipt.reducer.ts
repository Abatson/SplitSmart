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
        receiptLines.push(new Line("Coffee", 2.52), new Line("Bagel", 5.33), new Line("Fruit", 1.25));
        receiptLines[0].items.push(new Item(0));
        receiptLines[1].items.push(new Item(0));
        receiptLines[2].items.push(new Item(0));
        receiptTest.push(new Receipt(0, receiptLines, "Mario's Cantina"), new Receipt(1, receiptLines, "Lucy's Bistro"), new Receipt(2, receiptLines, "McDonalds"));


      return {
          ...state,
          groupReceipts : receiptTest,
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