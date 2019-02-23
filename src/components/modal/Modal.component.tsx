import React from 'react';
import { Users } from '../../models/Users';

interface IModalProps{
    user: Users,
    showModal: boolean,
    openModal: () => void,
    closeModal: () => void
}

export class ModalComponent extends React.Component<IModalProps, any >{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <button type="button" onClick={this.props.openModal}>Show Modal</button>
                {
                    this.props.showModal ?
                        <div className="Modal open">
                        <button className="button-close" onClick={this.props.closeModal}>X</button>
                            {this.props.showModal ? <p> Hello Modal</p> : null}
                            
                        </div> : <div className="Modal close"></div>}

                {
                    this.props.showModal ? <div className="backdropModal" onClick={this.props.closeModal}></div> : null
                }
            </div>
        )

    }
}

