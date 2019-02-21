import { IUserRemovesOthersState } from '.';
import { Users } from '../models/Users';
import { userRemovesOthersTypes } from '../actions/userremovesothers/UserRemovesOthers.actions';

const initialState: IUserRemovesOthersState = {
    removedUser: new Users
}

export const userRemovesOtherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userRemovesOthersTypes.REMOVE_OTHERS:
            return {
                ...state,
                removedUser: action.payload.removeUser
                
            }
    }

    return state;
}//state returned here 


