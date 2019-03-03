import React from 'react';
import {Item} from '../../models/Item';
import {Receipt} from '../../models/Receipt';
import { claimReceipt } from '../../actions/receipt/Receipt.actions';
import { Users } from '../../models/Users';

interface iReceiptProps{
    receipt: Receipt,
    user: Users
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    let receiptHTML : any = [];


    receiptHTML.push(<div className="receiptName" >
      Receipt Name: {this.props.receipt.receiptName}

      <p>
      {(this.props.receipt.receiptClaimant === undefined) ? "No one has claimed this receipt!" : "Receipt Claimant:"}   {(this.props.receipt.receiptClaimant.username == "") ? "" : this.props.receipt.receiptClaimant.username}  
      </p>
      {/* <p> */}
      {/* Claim Receipt:  <input onClick={this.props.onClick1} type="checkbox" id="scales" name="scales" */}
     {/* ></input> */}
      {/* </p> */}
      <p>
      Purchases: 
      </p>
      </div>
    );

      let tempJSX : any = [];
      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        tempJSX.push(<div><hr></hr></div>);
        tempJSX.push(<div><button onClick={this.props.onClick2[i]}
        >Split Purchase</button></div>)
        tempJSX.push(<React.Fragment><br></br></React.Fragment>)

        tempJSX.push(<React.Fragment>Purchase Name: {this.props.receipt.lines[i].lineName}</React.Fragment>)


        tempJSX.push(<p>Price Before Split: {this.props.receipt.lines[i].linePrice}</p>);
        tempJSX.push(<p>Equal Price Split:</p>);

              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                tempJSX.push(<div>{this.props.receipt.lines[i].items[j].itemClaimant.firstName} has agreed to pay ${this.props.receipt.lines[i].linePrice/(this.props.receipt.lines[i].items.length)}  </div>)
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