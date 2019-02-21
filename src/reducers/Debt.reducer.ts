import { IDebtState } from ".";
import { Debts } from "../models/Debts";
import { debtTypes } from "../actions/debt/Debt.actions";
// import { DebtTypes } from "../actions/debt/Debt.actions";

const initialState: IDebtState = {
    debts: []
  }

  export const DebtReducer = (state = initialState, action: any) => {

    switch (action.type) {
      case debtTypes.GET_DEBTS:
        return {
          ...state,
        }
      case debtTypes.PAID_DEBT:
        return {
          ...state,
        }
      case debtTypes.ACCEPT_PAYMENT:
        return {
          ...state,
        }
    }
    return state;
  }