import { connect } from "react-redux";
import { updatePassword, updateUsername, loginRequest, clearMessage } from '../../actions/login/Login.actions'
import {removeOtherUsers} from '../../actions/userremovesothers/UserRemovesOthers.actions';
import { getUserProfile } from '../../actions/profileinfo/ProfileInfo.actions';
import { IState } from "../../reducers";
import { LoginComponent } from "../login/Login.component";
import { ProfileInfoComponent } from '../ProfileInfo/ProfileInfo.component';
import {UserRemovesOthersComponent} from '../UserRemovesOthers/UserRemovesOthers.component';
import { Users } from "../../models/Users";

//This is getting every field from the login state in the interface IState
const mapStateToProps = (state: IState, ownProps) => {
    return {
       login: state.login,
        //user: Users,
        params: ownProps.match.params,
        userDeleted: state.userRemoved.removedUser
    }
}
//we could also do this instead
// user: state.login.user,
// username: state.login.username,
// password: state.login.password
// feedbackMessage: stat.login.feedbackMessage

//This is getting all of the actions that our login component will be able to call
const mapDispatchToProps = {
    loginRequest,
    clearMessage,
    getUserProfile,
    removeOtherUsers
}

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps, mapDispatchToProps)(UserRemovesOthersComponent);