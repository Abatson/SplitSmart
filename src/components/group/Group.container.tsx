import { connect } from "react-redux";
import { IState } from "../../reducers";
import { GroupComponent } from "./Group.component";
import { setCurrentGroup, getAllGroups, addReceipt, updateReceiptName, addLineToReceipt, updateNameLineToAdd, resetAddLineForm, updateLinePriceToAdd, resetAddLineNameForm, resetAddLinePriceForm } from "../../actions/Group/Group.action";
import { Groups } from "../../models/Groups";

const mapStateToProps = (state: IState) => {
    return {
      user: state.login.user,
      currentGroup: state.group.currentGroup,
      newReceipt: state.group.newReceipt,
      newLine: state.group.newLine,
    }
  }

  const mapDispatchToProps = {
    setCurrentGroup,
    getAllGroups,
    addReceipt,
    updateReceiptName,
    addLineToReceipt,
    updateNameLineToAdd,
    resetAddLineForm,
    updateLinePriceToAdd,
    resetAddLineNameForm,
    resetAddLinePriceForm,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);

  //test