import React from 'react';
import {Item} from '../../models/Item';
import {Receipt} from '../../models/Receipt';

interface iReceiptProps{
    receipt: Receipt
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    const {props} = this.props;
    let receiptHTML : any = [];


    receiptHTML.push(  <p>
      Receipt ID: {this.props.receipt.id}
      <p>
      Claim Receipt:  <input type="checkbox" id="scales" name="scales"
     ></input>
      </p>
      <p>
      Receipt Lines: 
      </p>
    </p>);


      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        receiptHTML.push(<li>Line : {i}</li>)
              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                receiptHTML.push(<li>Item : {this.props.receipt.lines[i].name} ItemPrice : {this.props.receipt.lines[i].items[j].itemPrice}</li>)
              }
        receiptHTML.push()
      }

    return (
      <div>

          {receiptHTML}
      
 
      </div>
    )
  }

}