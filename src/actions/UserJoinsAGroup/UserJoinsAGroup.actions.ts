import { ssClient } from '../../axios/ss.client';
import { Users } from '../../models/Users';
import { Url } from "url";

export const userJoinsAGroupTypes = {
    ADD_USERNAME: 'UJG_ADD_USERNAME',
    ADD_DISPLAYNAME: 'UJG_ADD_DISPLAYNAME',
    ADD_PASSWORD: 'UJG_ADD_PASSWORD',
    ADD_FIRST_NAME: 'UJG_ADD_FIRST_NAME',
    ADD_LAST_NAME: 'UJG_ADD_LAST_NAME',
    ADD_EMAIL: 'UJG_ADD__EMAIL',
    ADD_PROFILE_PICTURE: 'UJG_ADD_PROFILE_PICTURE',
    ADD_PHONE_NUMBER: 'UJG_ADD_PHONE_NUMBER',
    ADD_USER: 'ADD__USER',
    CLEAR_UPDATE_MESSAGE: 'CLEAR_UPDATE_MESSAGE',
    BAD_USER_REQUEST: 'BAD_USER_REQUEST'

}
//Actions
export const clearMessage = () => {
    return {
        payload: {

        },
        type: userJoinsAGroupTypes.CLEAR_UPDATE_MESSAGE
    }
}
export const addUsername = (username: string) => {
    return {
        payload: {
            username: username
        },
        type: userJoinsAGroupTypes.ADD_USERNAME
    }
}
export const addDisplayName = (displayName: string) => {
    return {
        payload: {
            displayName: displayName
        },
        type: userJoinsAGroupTypes.ADD_DISPLAYNAME
    }
}
export const addPassword = (password: string) => {
    return {
        payload: {
            password: password
        },
        type: userJoinsAGroupTypes.ADD_PASSWORD
    }
}
export const addFirstName = (firstName: string) => {
    return {
        payload: {
            firstName: firstName
        },
        type: userJoinsAGroupTypes.ADD_FIRST_NAME
    }
}
export const addLastName = (lastName: string) => {
    return {
        payload: {
            lastName: lastName
        },
        type: userJoinsAGroupTypes.ADD_LAST_NAME
    }
}
export const addEmail = (email: string) => {
    return {
        payload: {
            email: email
        },
        type: userJoinsAGroupTypes.ADD_EMAIL
    }
}
export const addProfilePicture = (picture: Url) => {
    return {
        payload: {
            picture: picture
        },
        type: userJoinsAGroupTypes.ADD_PROFILE_PICTURE
    }
}
export const addPhoneNumber = (phone: string) => {
    return {
        payload: {
            phone: phone
        },
        type: userJoinsAGroupTypes.ADD_PHONE_NUMBER
    }
}

export const addUser = (user: Users) => async (dispatch) => {
    try {
        const res = await ssClient.post('/users', user);
        dispatch({
            payload: {
            },
            type: userJoinsAGroupTypes.ADD_USER
        })
    } catch (err) {
        console.log(err);
    } dispatch({
        payload: {

        },
        type: userJoinsAGroupTypes.BAD_USER_REQUEST

    })
}
