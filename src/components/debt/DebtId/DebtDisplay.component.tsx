import React from 'react';
import { Users } from '../../../models/Users';
import { Debts } from '../../../models/Debts';
import Button from 'reactstrap/lib/Button';

interface IDebtIdDisplayProps {
    debt: Debts,
    owes: boolean,
    onClickPaid: () => void,
    onClickVerify: () => void,
}

export class DebtIdDisplayComponent extends React.PureComponent<IDebtIdDisplayProps, any> {

  render() {
    return (
      <>
      {
        <tr>
          <td >{this.props.debt.sender.picture} </td>
          <td >{this.props.debt.sender.displayName} </td>
          <td >This person owes</td>
          <td >{this.props.debt.claimer.picture} </td>
          <td >{this.props.debt.claimer}</td>
          <td >{this.props.debt.amount}</td>
      <td >{(this.props.owes && !this.props.debt.paid) && <button onClick={this.props.onClickPaid}>Send Payment</button>}
      {(this.props.debt.paid && !this.props.debt.verified && !this.props.owes) && <button onClick={this.props.onClickVerify}>Verify Payment</button>}</td>
        </tr>}
      
      </>
    )
  }

}