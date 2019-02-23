import { IModalState } from '.';
import { modalTypes } from '../actions/modal/Modal.actions';
import { Users } from '../models/Users';

const initialState: IModalState = {
    showModal: false
}

export const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modalTypes.OPEN_MODAL:
            return {
                ...state,
                showModal: true
            };
        case modalTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            };
    }
    return state;
}//state returned here 