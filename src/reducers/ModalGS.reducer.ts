import { IModalGSState } from '.';
import { modalGSTypes } from '../actions/modal/ModalGS.actions';
import { Users } from '../models/Users';

const initialState: IModalGSState = {
    showGSModal: false
}

export const modalGSReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modalGSTypes.OPEN_GSMODAL:
            return {
                ...state,
                showGSModal: true
            };
        case modalGSTypes.CLOSE_GSMODAL:
            return {
                ...state,
                showGSModal: !state.showGSModal
            };
    }
    return state;
}//state returned here 