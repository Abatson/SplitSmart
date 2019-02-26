import React from 'react';
import { Users } from '../../models/Users';

interface IModalASProps{
    user: Users,
    showASModal: boolean,
    openASModal: () => void,
    closeASModal: () => void
}

export class ModalASComponent extends React.Component<IModalASProps, any >{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <button type="button" className="showASModal" onClick={this.props.openASModal}>Show AS Modal</button>
                {
                    this.props.showASModal ?
                        <div className="ModalAS open">
                        <button className="button-close" onClick={this.props.closeASModal}>X</button>
                            {this.props.showASModal ? <p> Account Settings Modal</p> : null}
                            
                        </div> : <div className="ModalAS close"></div>}

                {
                    this.props.showASModal ? <div className="backdropModal" onClick={this.props.closeASModal}></div> : null
                }
            </div>
        )

    }
}

