import { ssClient } from "../../axios/ss.client";
import { Receipt } from "../../models/Receipt";
import { Line } from "../../models/Line";
import { Users } from "../../models/Users"

export const receiptTypes = {
    CLAIM_RECEIPT:  'L_CLAIM_RECEIPT' ,
    CLAIM_LINE:  'L_CLAIM_LINE' ,
    INITIALIZE_RECEIPTS:  'L_INITIALIZE_RECEIPTS' ,
    UPDATE_RECEIPTS:  'L_UPDATE_RECEIPTS' ,
    FAILED_TO_GRAB: 'R_FAILED_TO_GRAB'
  }
  

  //After a receipt has been claimed, we want someone who can claim the lines of the receipt
  //claimed is the id of the line in the receipt that was claimed
  export const initializeReceipts =  (groupid: number = 0)  => async (dispatch) => {
//api call, change to a parameter that is a number, groupid send that data to reducer, then go to receipt reducer
try {
    console.log(groupid)
    const res = await ssClient.get(`/receipts/groups/${groupid}`)//${groupid}`);
    console.log(res)
    //when doing an async action, we have to call the dispatcher ourselves
    //this is the same thing as returning the payload up above in our other methods

/* 
    let receiptTest:Receipt[] = []; */

    //dummy data
 /*    let line1 = new Line("Hamburger", 2.55);
    let line2 = new Line("Pepsi", 0.55);
    let line3 = new Line("Pizza", 1.25);
    let line4 = new Line("Candy", 3.55);

    let lines1 = [line1, line2, line3, line4];

    let dummyReceipt : Receipt[] = [new Receipt(0, lines1), new Receipt(1, lines1)];
 */
    dispatch({
        payload: {

            //dummy data

            //receipt: dummyReceipt

            //axios
            receipt: res.data
        },
        type: receiptTypes.INITIALIZE_RECEIPTS
    })

} catch (err) {
    //impediment, how to get api message from error
    console.log(err);
    dispatch({
        payload: {
        },
        type: receiptTypes.FAILED_TO_GRAB
    })


}

}


  //After a receipt has been claimed, we want someone who can claim the lines of the receipt
  //claimed is the id of the line in the receipt that was claimed
  export const updateReceipts =  (receipts: Receipt[])  => async (dispatch) => {
    //api call, change to a parameter that is a number, groupid send that data to reducer, then go to receipt reducer
    try {


        const res = await ssClient.patch(`/receipts`, receipts)//${groupid}`);


        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
    
        dispatch({
            payload: {
    
                //dummy data
    
                //receipt: dummyReceipt
    
                //axios
                receipt: res.data
            },
            type: receiptTypes.UPDATE_RECEIPTS
        })
    
    } catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: receiptTypes.FAILED_TO_GRAB
        })
    
    
    }
    
    }

  //After a receipt has been claimed, we want someone who can claim the lines of the receipt
  //claimed is the id of the line in the receipt that was claimed
  export const claimLine = (receiptID: number, claimant: Users, claimed: number) => {
    return {
        payload:{
            receiptID,
            claimant,
            claimed
        },
        type: receiptTypes.CLAIM_LINE
    }

}

    //Initially we want someone to claim the receipt
  //claimant is the user ID of the person who claims the receipt
  //claimant is the user ID of the person who claims the line
export const claimReceipt = (receiptID: number, claimant:number) => {
    return {
        payload:{
            receiptID,
            claimant
        },
        type: receiptTypes.CLAIM_RECEIPT
    }

}

