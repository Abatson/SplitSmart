import React from 'react';
import { Users } from '../../models/Users';

interface IModalAGProps{
    user: Users,
    showAGModal: boolean,
    openAGModal: () => void,
    closeAGModal: () => void
}

export class ModalAGComponent extends React.Component<IModalAGProps, any >{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <button type="button" onClick={this.props.openAGModal} className="buttonAG">Show AS Modal</button>
                {
                    this.props.showAGModal ?
                        <div className="ModalAG open">
                        <button className="button-close" onClick={this.props.closeAGModal}>X</button>
                            {this.props.showAGModal ? <p> Add a group Modal</p> : null}
                            
                        </div> : <div className="ModalAG close"></div>}

                {
                    this.props.showAGModal ? <div className="backdropModal" onClick={this.props.closeAGModal}></div> : null
                }
            </div>
        )

    }
}

