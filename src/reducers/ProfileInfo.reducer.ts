import { IProfileInfoState } from '.';
import { profileInfoTypes } from '../actions/profileinfo/ProfileInfo.actions';
import { Users } from '../models/Users';

const initialState: IProfileInfoState = {
    userProfile: new Users
}

export const profileInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case profileInfoTypes.GET_USER_BY_USERNAME:
            return {
                ...state,
                userProfile: action.payload.profileUser
                
            }
    }

    return state;
}//state returned here 


