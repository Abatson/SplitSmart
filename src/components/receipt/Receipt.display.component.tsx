import React from 'react';
import { IReceiptState } from '../../reducers';
import {Item} from '../../models/Item'

interface iReceiptProps{
    item: Item,
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    const {props} = this.props;
    return (
      <div>

        <p>
          Line: {props.line}
        </p>
 
      </div>
    )
  }

}