import { IRegisterState } from ".";
import { Users } from "../models/Users";
import { registerTypes } from "../actions/register/Register.actions";

//this is our intialstate of the interface we declared for the login component
const initialState: IRegisterState = {
    newUser: new Users,
    registerFeedback: '',
  }
  
  export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        //if the action is of type update password, take action payload and update our password
        //we need ...state, cause we want the rest of the state to stay the same
      case registerTypes.UPDATE_PASSWORD:
        return {
          ...state,
          newUser:{
              ...state.newUser,
              password: action.payload.password
            }
        }
        //same as up above
      case registerTypes.UPDATE_USERNAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.username
          }
      }
      case registerTypes.UPDATE_DISPLAY_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.displayName
          }
      }
      case registerTypes.UPDATE_FIRST_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.firstName
          }
      }
      case registerTypes.UPDATE_LAST_NAME:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.lastName
          }
      }
      case registerTypes.UPDATE_EMAIL:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.email
          }
      }
      case registerTypes.UPDATE_PHONE:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          username: action.payload.phone
          }
      }
      //this is one where we don't need a payload cause we dont need any outside information to reset a field
      //just the action to reset is good enough
      case registerTypes.CLEAR_REGISTER_MESSAGE:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          feedbackMessage: ''
          }
      }
      //reset our credentials and update the user field with our recieved user inforamtion
      case registerTypes.REGISTER:{
          return {
              ...state,
              newUser: new Users,  
          }
      } 
  
      //reset the credentials and tell them to try again
      case registerTypes.FAILED_REGISTER: {
          return {
              ...state,
              registerFeedback: 'Incorrect Data'
          }
  
      }
    }
    return state;
  }