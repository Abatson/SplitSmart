import { async } from "q";
import { ssClient } from "../../axios/ss.client";
import { Receipt } from "../../models/Receipt";
import { Line } from "../../models/Line";

export const GroupTypes = {
    SET_CURRENT_GROUP: "G_SET_CURRENT_GROUP",
    GET_ALL_GROUPS: "G_GET_ALL_GROUPS",
    FAILED_TO_GET_ALL_GROUPS: "G_FAILED_TO_GET_ALL_GROUPS",
    ADD_RECEIPT: "G_ADD_RECEIPT",
    UPDATE_RECEIPT_NAME: "G_UPDATE_RECEIPT_NAME",
    ADD_LINE_TO_RECEIPT_BUTTON: "G_ADD_LINE_TO_RECEIPT_BUTTON",
    ADD_LINE_TO_RECEIPT: "G_ADD_LINE_TO_RECEIPT",
    UPDATE_LINE_NAME_TO_ADD: "G_UPDATE_LINE_NAME_TO_ADD",
    RESET_ADD_LINE_FORM: "G_RESET_ADD_LINE_FORM",
    UPDATE_LINE_PRICE_TO_ADD: "G_UPDATE_LINE_PRICE_TO_ADD",
    RESET_ADD_LINE_NAME_FORM: "G_RESET_ADD_LINE_NAME_FORM",
    RESET_ADD_LINE_PRICE_FORM: "G_RESET_ADD_LINE_PRICE_FORM",
}
export const setCurrentGroup = (groupId: number) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.SET_CURRENT_GROUP
    }
}
export const addReceipt = (newReceipt: Receipt) = async (dispatch) => {
    try{
        const res = await ssClient.post('/receipt', newReceipt);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        dispatch({
            payload: {
                group: res.data
            },
            type: GroupTypes.ADD_RECEIPT
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: GroupTypes.FAILED_TO_UPDATE_GROUP
        })


}
}
export const updateReceiptName = (receiptName: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const addLineToReceiptButton = () => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const addLineToReceipt = (newLine: Line) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const updateNameLineToAdd = (lineNameToAdd: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const resetAddLineForm = (lineToAdd: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const updateLinePriceToAdd = (linePriceToAdd: number) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const resetAddLineNameForm = (lineNameToAdd: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}
export const resetAddLinePriceForm = (linePriceToAdd: number) => {
    return {
        payload: {
            groupName: groupName
        },
        type: GroupTypes.UPDATE_GROUP_NAME
    }
}




export const getAllGroups = (userId: number) => async(dispatch) => {

        try{
            const res = await ssClient.get(`/groups/users:${userId}`);
            console.log(res)
            //when doing an async action, we have to call the dispatcher ourselves
            //this is the same thing as returning the payload up above in our other methods
            dispatch({
                payload: {
                    groups: res.data
                },
                type: GroupTypes.GET_ALL_GROUPS
            })
    
        }catch (err) {
            //impediment, how to get api message from error
            console.log(err);
            dispatch({
                payload: {
                },
                type: GroupTypes.FAILED_TO_GET_ALL_GROUPS
            })
    
    
    }
}