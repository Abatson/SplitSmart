

export const receiptTypes = {
    CLAIM_RECEIPT:  'L_CLAIM_RECEIPT' ,
    CLAIM_LINE:  'L_CLAIM_LINE' ,


  }
  


  //After a receipt has been claimed, we want someone who can claim the lines of the receipt
  //claimed is the id of the line in the receipt that was claimed
  export const claimLine = (claimant: number, claimed: number) => {
    return {
        payload:{
            claimant,
            claimed
        },
        type: receiptTypes.CLAIM_LINE
    }

}

    //Initially we want someone to claim the receipt
  //claimant is the user ID of the person who claims the receipt
  //claimant is the user ID of the person who claims the line
export const claimReceipt = (claimant:number) => {
    return {
        payload:{
            claimant
        },
        type: receiptTypes.CLAIM_RECEIPT
    }

}

