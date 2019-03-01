import { connect } from "react-redux";
import {openASModal, closeASModal} from '../../actions/modal/ModalAS.actions';

import { IState } from "../../reducers";
import {ModalASComponent} from '../modals/ModalAS.component';


//This is getting every field from the Navbar state in the interface IState
const mapStateToProps = (state: IState, ownProps) => {
    return {
        user: state.login.user,
        showASModal: state.modalAS.showASModal,
        ownProps: ownProps,
    }
}

const mapDispatchToProps = {
    openASModal,
    closeASModal
}

//This is getting all of the actions that our Navbar component will be able to call

//This statement gives all the above information to our component and as such
//this is the export we want when we make this component in our app.tsx, or anywhere else we need it
export default connect(mapStateToProps, mapDispatchToProps)(ModalASComponent);