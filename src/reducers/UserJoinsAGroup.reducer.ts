import { IUserJoinsAGroupState } from '.';

import { userJoinsAGroupTypes } from '../actions/UserJoinsAGroup/UserJoinsAGroup.actions';
import { Users } from '../models/Users';

const initialState: IUserJoinsAGroupState = {
    addedUser: new Users
}

export const userJoinsAGroupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userJoinsAGroupTypes.ADD_USERNAME:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    username: action.payload.username
                }
            }
        case userJoinsAGroupTypes.ADD_USERNAME:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    displayName: action.payload.displayName
                }
            }
        case userJoinsAGroupTypes.ADD_PASSWORD:
            return {
                ...state,
                userAdded: {
                    ...state.addedUser,
                    password: action.payload.password
                }
            }
        case userJoinsAGroupTypes.ADD_FIRST_NAME:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    firstName: action.payload.firstName
                }
            }
        case userJoinsAGroupTypes.ADD_LAST_NAME:
            return {
                ...state,
                updatedUser: {
                    ...state.addedUser,
                    lastName: action.payload.lastName
                }
            }
        case userJoinsAGroupTypes.ADD_EMAIL:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    email: action.payload.email
                }
            }
        case userJoinsAGroupTypes.ADD_PHONE_NUMBER:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    phone: action.payload.phone
                }
            }
        case userJoinsAGroupTypes.ADD_PROFILE_PICTURE:
            return {
                ...state,
                addedUser: {
                    ...state.addedUser,
                    picture: action.payload.picture
                }
            }

    }
    return state;
}//state returned here 


