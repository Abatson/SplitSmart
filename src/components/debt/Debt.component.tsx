import React from 'react';
import { IDebtState } from '../../reducers';
import { Users } from '../../models/Users';
import { getDebts, paidDebt, acceptDebt } from '../../actions/debt/Debt.actions';

interface IDebtProps {
    debt: IDebtState,
    user: Users,
    getDebts: (userId:number)=>void,
    paidDebt: (debtId:number)=>void,
    acceptDebt: (debtId: number)=>void
}

export class DebtComponent extends React.Component<IDebtProps, any> {
    constructor(props) {
      super(props);
    }



render() {
    
    return (
      <div>


      </div>
    )
  }

}