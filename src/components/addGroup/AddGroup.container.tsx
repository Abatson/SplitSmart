import { IState } from "../../reducers";
import { AddGroupComponent } from "./AddGroup.Component";
import { connect } from "react-redux";
import { updateGroupPicture, updateGroupName, updateGroupDescription, inviteUserToGroup, createGroup, updateGroupOwner, resetAddForm } from "../../actions/addGroup/AddGroup.actions";
import { string } from "prop-types";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        usernameToAdd: string,
        newGroup: state.addNewGroup.newGroup
    }
}

const mapDispatchToProps = {
    updateGroupName,
    updateGroupPicture,
    updateGroupDescription,
    inviteUserToGroup,
    createGroup,
    updateGroupOwner,
    resetAddForm
}


export default connect(mapStateToProps, mapDispatchToProps)(AddGroupComponent);