import { ssClient } from "../../axios/ss.client";


export const receiptTypes = {
    CLAIM_RECEIPT:  'L_CLAIM_RECEIPT' ,
    CLAIM_LINE:  'L_CLAIM_LINE' ,
    INITIALIZE_RECEIPTS:  'L_INITIALIZE_RECEIPTS' ,
    FAILED_TO_GRAB: 'R_FAILED_TO_GRAB'
  }
  

  //After a receipt has been claimed, we want someone who can claim the lines of the receipt
  //claimed is the id of the line in the receipt that was claimed
  export const initializeReceipts =  (groupid: number)  => async (dispatch) => {
//api call, change to a parameter that is a number, groupid send that data to reducer, then go to receipt reducer
try {
    const res = await ssClient.get(`/groups/users/${groupid}`);
    console.log(res)
    //when doing an async action, we have to call the dispatcher ourselves
    //this is the same thing as returning the payload up above in our other methods
    dispatch({
        payload: {
            user: res.data
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
  export const claimLine = (receiptID: number, claimant: number, claimed: number) => {
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

