import { connect } from "react-redux";
import { IState } from "../../reducers";
import { GroupComponent } from "./Group.component";

const mapStateToProps = (state: IState) => {
    return {

    }
  }

  const mapDispatchToProps = {
 
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);