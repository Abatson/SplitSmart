import { connect } from 'react-redux';
import {
    addUsername, addDisplayName, addPassword, addFirstName, addLastName, addEmail,
    addProfilePicture, addPhoneNumber, clearMessage
} from '../../actions/UserJoinsAGroup/UserJoinsAGroup.actions';
import { IState } from '../../reducers/index';
import { UserJoinsAGroupComponent } from './UserJoinsAGroup.component';
//container
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        updatedUser: state.accountSettings.updatedUser,
        addedUser: state.userJoined.addedUser,
    }
}
const mapDispatchToProps = {
    addUsername,
    addDisplayName,
    addPassword,
    addFirstName,
    addLastName,
    addEmail,
    addProfilePicture,
    addPhoneNumber,
    clearMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(UserJoinsAGroupComponent);