import { Groups } from "../../models/Groups";
import { Url } from "url";
import { ssClient } from "../../axios/ss.client";

export const addGroupTypes = {
    UPDATE_GROUP: 'L_UPDATE_GROUP',
    UPDATE_GROUP_NAME: 'L_UPDATE_GROUP_NAME',
    UPDATE_GROUP_PICTURE: 'L_UPDATE_GROUP_PICTURE',
    UPDATE_GROUP_DESCRIPTION: 'L_UPDATE_GROUP_DESCRIPTION',
    INVITE_USER_TO_GROUP: 'L_INVITE_USER_TO_GROUP',
    FAILED_TO_ADD_GROUP: 'L_FAILED_TO_ADD_GROUP'
}

export const updateGroup = (newGroup: Groups) => async (dispatch) => {

    
    try{
        const res = await ssClient.post('/login', newGroup);
        console.log(res)
        //when doing an async action, we have to call the dispatcher ourselves
        //this is the same thing as returning the payload up above in our other methods
        dispatch({
            payload: {
                group: res.data
            },
            type: addGroupTypes.UPDATE_GROUP
        })

    }catch (err) {
        //impediment, how to get api message from error
        console.log(err);
        dispatch({
            payload: {
            },
            type: addGroupTypes.FAILED_TO_ADD_GROUP
        })


}
}

export const updateGroupName = (groupName: string) => {
    return {
        payload: {
            groupName: groupName
        },
        type: addGroupTypes.UPDATE_GROUP_NAME
    }

}
export const updateGroupPicture = (groupPicture: Url) => {
    return {
        payload: {
            groupPicture: groupPicture
        },
        type: addGroupTypes.UPDATE_GROUP_PICTURE
    }

}

export const updateGroupDescription = (groupDescription: string) => {
    return {
        payload: {
            groupDescription: groupDescription
        },
        type: addGroupTypes.UPDATE_GROUP_DESCRIPTION
    }

}
export const inviteUserToGroup = () => {
    payload: {

    }
}