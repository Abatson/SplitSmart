import { async } from "q";
import { ssClient } from "../../axios/ss.client";

export const GroupTypes = {
    SET_CURRENT_GROUP: "G_SET_CURRENT_GROUP",
    GET_ALL_GROUPS: "G_GET_ALL_GROUPS",
    FAILED_TO_GET_ALL_GROUPS: "G_FAILED_TO_GET_ALL_GROUPS",
}

export const setCurrentGroup = (groupId: number) => {
    
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