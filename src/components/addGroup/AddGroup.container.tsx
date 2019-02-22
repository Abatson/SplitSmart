import { IState } from "../../reducers";
import { AddGroupComponent } from "./AddGroup.Component";
import { connect } from "react-redux";
import { updateGroupPicture, updateGroupName, updateGroupDescription, inviteUserToGroup, updateGroup } from "../../actions/addGroup/AddGroup.actions";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        newGroup: state.addNewGroup.newGroup
    }
}

const mapDispatchToProps = {
    updateGroupName,
    updateGroupPicture,
    updateGroupDescription,
    inviteUserToGroup,
    updateGroup
}


export default connect(mapStateToProps, mapDispatchToProps)(AddGroupComponent);