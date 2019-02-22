import { connect } from "react-redux";
import { updatePassword, updateUsername, loginRequest, clearMessage } from '../../actions/login/Login.actions'
import { IState } from "../../reducers";
import { SideBarComponent  } from "./SideBar.component";

//This is getting every field from the Navbar state in the interface IState
const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

//This is getting all of the actions that our Navbar component will be able to call

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps)(SideBarComponent);