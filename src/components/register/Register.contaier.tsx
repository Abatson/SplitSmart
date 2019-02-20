import { connect } from "react-redux";
import {updatePassword, updateUsername, updateDisplayName, updateFirstName, updateLastName, updateEmail, updatePhone, registerRequest, clearMessage} from '../../actions/register/Register.actions'
import { IState } from "../../reducers";
import { RegisterComponent } from "./Register.component";


//This is getting every field from the login state in the interface IState
const mapStateToProps = (state: IState) => {
    return {
     register: state.register
    }
  }
  //we could also do this instead
  // user: state.login.user,
  // username: state.login.username,
  // password: state.login.password
  // feedbackMessage: stat.login.feedbackMessage
  
  //This is getting all of the actions that our login component will be able to call
  const mapDispatchToProps = {
    updatePassword,
    updateUsername,
    updateDisplayName,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhone,
    registerRequest,
    clearMessage
  }
  
  //This statement gives all the above information to our component and as such
  //this is the export we want when we make this component in our app.tsx, or anywhere else we need it
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);