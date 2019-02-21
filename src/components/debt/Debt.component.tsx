import React from 'react';
import { IDebtState } from '../../reducers';

interface IDebtProps {
    debt: IDebtState,

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