import { IAddGroupState } from ".";
import { Users } from "../models/Users";
import { Groups } from "../models/Groups";
import { Url } from 'url';
import { addGroupTypes } from "../actions/addGroup/AddGroup.actions";
import { registerTypes } from "../actions/register/Register.actions";
const initialState: IAddGroupState = {
  newGroup: new Groups,
  usernameToAdd: ''
}

export const addGroupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addGroupTypes.CREATE_GROUP:
      return {
        ...state,
        newGroup: new Groups
      }

    case addGroupTypes.UPDATE_GROUP_NAME:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupName: action.payload.groupName
        }
      }

    case addGroupTypes.UPDATE_GROUP_DESCRIPTION:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupDescription: action.payload.groupDescription
        }
      }

    case addGroupTypes.UPDATE_GROUP_PICTURE:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupPicture: action.payload.groupPicture
        }
      }

      case addGroupTypes.UPDATE_GROUP_OWNER:
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          groupOwner: action.payload.ownerId
        }
      }

    case addGroupTypes.FAILED_TO_ADD_GROUP:
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      }

     case addGroupTypes.FAILED_TO_ADD_USER_TO_GROUP:
     console.log(action.payload.user);
      return {
        ...state,
        addGroupFeedback: 'Incorrect Data'
      } 
      case addGroupTypes.UPDATE_USER_TO_ADD:
      return{
        ...state,
        usernameToAdd: action.payload.usernameToAdd
      }
      case addGroupTypes.INVITE_USER_TO_GROUP:
      console.log(action.payload.user)
      let newArray = [...state.newGroup.groupMembers];
      newArray.push(action.payload.user)
      action.payload.usernameToAdd = '';
      return{
        ...state,
        newGroup: {
          ...state.newGroup,
          groupMembers: newArray
        }
        

      }
      case addGroupTypes.RESET_ADD_FORM:
        initialState.usernameToAdd = '';
        return initialState;

  }
  return state
}
