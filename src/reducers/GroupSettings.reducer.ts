import { IGroupSettingsState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
import { GroupSettingsTypes } from "../actions/GroupSettings/GroupSettings.actions";
import { registerTypes } from "../actions/register/Register.actions";
const initialState: IGroupSettingsState = {
  usernameToAdd: ''
}

export const GroupSettingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GroupSettingsTypes.UPDATE_GROUP:
      return {
        ...state,
        currentGroup: new Groups
      }

    case GroupSettingsTypes.UPDATE_GROUP_NAME:
      return {
        ...state,
        newGroup: {
          ...state.currentGroup,
          groupName: action.payload.groupName
        }
      }

    case GroupSettingsTypes.UPDATE_GROUP_DESCRIPTION:
      return {
        ...state,
        newGroup: {
          ...state.currentGroup,
          groupDescription: action.payload.groupDescription
        }
      }

    case GroupSettingsTypes.UPDATE_GROUP_PICTURE:
      return {
        ...state,
        newGroup: {
          ...state.currentGroup,
          groupPicture: action.payload.groupPicture
        }
      }


    case GroupSettingsTypes.FAILED_TO_UPDATE_GROUP:
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      }

     case GroupSettingsTypes.FAILED_TO_ADD_USER_TO_GROUP:
     console.log(action.payload.user);
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      } 
      case GroupSettingsTypes.UPDATE_USER_TO_ADD:
      return{
        ...state,
        usernameToAdd: action.payload.usernameToAdd
      }
      case GroupSettingsTypes.INVITE_USER_TO_GROUP:
      console.log(action.payload.user)
      let newArray = [...state.currentGroup.groupMembers];
      newArray.push(action.payload.user)
      action.payload.usernameToAdd = '';
      return{
        ...state,
        newGroup: {
          ...state.currentGroup,
          groupMembers: newArray
        }
        

      }
      case GroupSettingsTypes.RESET_ADD_FORM:
        initialState.usernameToAdd = '';
        return initialState;

  }
  return state
}
