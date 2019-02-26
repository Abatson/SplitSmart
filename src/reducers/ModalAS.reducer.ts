import { IModalASState } from '.';
import { modalASTypes } from '../actions/modal/ModalAS.actions';
import { Users } from '../models/Users';

const initialState: IModalASState = {
    showASModal: false
}

export const modalASReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modalASTypes.OPEN_ASMODAL:
            return {
                ...state,
                showASModal: true
            };
        case modalASTypes.CLOSE_ASMODAL:
            return {
                ...state,
                showASModal: !state.showASModal
            };
    }
    return state;
}//state returned here 