import { IState } from "../../reducers";
import { GroupSettingsComponent } from "./GroupSettings.component";
import { connect } from "react-redux";
import { updateGroupPicture, updateGroupName, updateGroupDescription, inviteUserToGroup, updateGroup, resetAddForm, updateUserToAdd } from "../../actions/GroupSettings/GroupSettings.actions";
import { string } from "prop-types";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user,
        usernameToAdd: state.groupSettings.usernameToAdd,
        currentGroup: state.GroupsPage.currentGroup
    }
}

const mapDispatchToProps = {
    updateGroupName,
    updateGroupPicture,
    updateGroupDescription,
    inviteUserToGroup,
    updateGroup,
    resetAddForm,
    updateUserToAdd
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupSettingsComponent);