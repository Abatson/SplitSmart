import { connect } from "react-redux";
import { IState } from "../../reducers";
import { GroupComponent } from "./Group.component";
import { setCurrentGroup } from "../../actions/Group/Group.action";
import { Groups } from "../../models/Groups";

const mapStateToProps = (state: IState) => {
    return {
      user: state.login.user,
      allGroups: [],
      currentGroup: state.group.currentGroup,
    }
  }

  const mapDispatchToProps = {
    setCurrentGroup,
    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);

  //test