import React from 'react';
import {Item} from '../../models/Item';
import {Receipt} from '../../models/Receipt';
import { claimReceipt } from '../../actions/receipt/Receipt.actions';

interface iReceiptProps{
    receipt: Receipt
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    let receiptHTML : any = [];


    receiptHTML.push(  <div className="receiptName" >
      Receipt Name: {this.props.receipt.name}

      <p>
      {(this.props.receipt.claimant == -1) ? "No one has claimed this receipt!" : "Receipt Claimant:"}   {(this.props.receipt.claimant == -1) ? "" : this.props.receipt.claimant}  
      </p>
      <p>
      Claim Receipt:  <input onClick={this.props.onClick1} type="checkbox" id="scales" name="scales"
     ></input>
      </p>
      <p>
      Purchases: 
      </p>
      </div>
    );

      let tempJSX : any = [];
      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        tempJSX.push(<li><input onClick={this.props.onClick2[i]} type="checkbox" id="scales" name="scales"
        ></input>Purchase Name: {this.props.receipt.lines[i].name}</li>)

        tempJSX.push(<p>Price Before Split: {this.props.receipt.lines[i].itemPrice}</p>);
        tempJSX.push(<p>Equal Price Split:</p>);

              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                tempJSX.push(<div>{this.props.receipt.lines[i].name} pays ${this.props.receipt.lines[i].itemPrice/(this.props.receipt.lines[i].items.length)}  </div>)
              }
        
        receiptHTML.push(<div>{tempJSX}</div>)
        tempJSX = [];
        receiptHTML.push(<p></p>)
      }

    return (
      <div style={{background:'#999999'}} >

          {receiptHTML}
      
 
      </div>
    )
  }

} 