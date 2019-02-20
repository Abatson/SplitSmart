import { connect } from 'react-redux';
import {
    updateUsername, updateDisplayName, updatePassword, updateFirstName, updateLastName, updateEmail,
    updateProfilePicture, updatePhoneNumber, deactivateAccount, clearMessage
} from '../../actions/accountsettings/AccountSettings.actions';
import { IState } from '../../reducers/index';
import { AccountSettingsComponent } from './AccountSettingsComponent';
//container
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
    }
}
const mapDispatchToProps = {
    updateUsername,
    updateDisplayName,
    updatePassword,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateProfilePicture,
    updatePhoneNumber,
    deactivateAccount,
    clearMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent);