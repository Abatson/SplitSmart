import { IModalAGState } from '.';
import { modalAGTypes } from '../actions/modal/ModalAG.actions';
import { Users } from '../models/Users';

const initialState: IModalAGState = {
    showAGModal: false
}

export const modalAGReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case modalAGTypes.OPEN_AGMODAL:
            return {
                ...state,
                showAGModal: true
            };
        case modalAGTypes.CLOSE_AGMODAL:
            return {
                ...state,
                showAGModal: !state.showAGModal
            };
    }
    return state;
}//state returned here 