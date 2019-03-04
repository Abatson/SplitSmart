import React from 'react';
import { Users } from '../../models/Users';
import ProfileInfoComponent from '../ProfileInfo/ProfileInfo.container';
import AccountSettingsComponent from '../accountsettings/AccountSettings.container';
import AddGroupComponent from '../addGroup/AddGroup.container';
import GroupSettingsComponent from '../groupSettings/GroupSettings.container';

interface IModalAGProps {
    user: Users,
    showAGModal: string,
    ownProps: any,
    openAGModal: (type:string) => void,
    closeAGModal: () => void
}

export class ModalAGComponent extends React.Component<IModalAGProps, any>{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div >
                <button type="button" onClick={()=>this.props.openAGModal(this.props.ownProps.type)} className={this.props.ownProps.className}>{this.props.ownProps.name}</button>
                {
                    this.props.showAGModal ?
                        <div className="ModalAG open">
                            <button className="button-close" onClick={this.props.closeAGModal}>X</button>
                            {this.props.showAGModal && ((this.props.showAGModal === 'AddGroup' && this.props.ownProps.type === 'AddGroup') && <AddGroupComponent />)}
                            {this.props.showAGModal && ((this.props.showAGModal === 'AccountSettings' && this.props.ownProps.type === 'AccountSettings')&& <AccountSettingsComponent />)}
                            {this.props.showAGModal && ((this.props.showAGModal === 'GroupSettings' && this.props.ownProps.type === 'GroupSettings') && <GroupSettingsComponent />)}
                        </div> : <div className="ModalAG close"></div>}

                {
                    this.props.showAGModal ? <div className="backdropModal" onClick={this.props.closeAGModal}></div> : null
                }
            </div>
        )

    }
}

