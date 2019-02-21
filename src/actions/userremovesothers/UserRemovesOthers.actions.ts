import { ssClient } from '../../axios/ss.client';
import { Users } from '../../models/Users';
import { Url } from "url";

export const userRemovesOthersTypes = {
    REMOVE_OTHERS: 'URO_REMOVE_OTHERS',
    BAD_USER_REQUEST: 'BAD_USER_REQUEST'
}


export const removeOtherUsers = (username: string) => async (dispatch) => {
    try {//
        const res = await ssClient.delete(`/users/${username}`);// we might change this path
        dispatch({
            payload: {
                removeUser: res.data
            },
            type: userRemovesOthersTypes.REMOVE_OTHERS
        })
    } catch (err) {
        console.log(err);
    } dispatch({
        payload: {

        },
        type: userRemovesOthersTypes.BAD_USER_REQUEST

    })
}
