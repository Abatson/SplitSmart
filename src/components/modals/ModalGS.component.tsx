import React from 'react';
import { Users } from '../../models/Users';

interface IModalGSProps{
    user: Users,
    showGSModal: boolean,
    openGSModal: () => void,
    closeGSModal: () => void
}

export class ModalGSComponent extends React.Component<IModalGSProps, any >{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <button type="button" onClick={this.props.openGSModal}>Show GS Modal</button>
                {
                    this.props.showGSModal ?
                        <div className="ModalGS open">
                        <button className="button-close" onClick={this.props.closeGSModal}>X</button>
                            {this.props.showGSModal ? <p> Group Settigs Modal</p> : null}
                            
                        </div> : <div className="ModalGS close"></div>}

                {
                    this.props.showGSModal ? <div className="backdropModal" onClick={this.props.closeGSModal}></div> : null
                }
            </div>
        )

    }
}

