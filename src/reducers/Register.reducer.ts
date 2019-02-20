import { IRegisterState } from ".";
import { Users } from "../models/Users";
import { registerTypes } from "../actions/register/Register.actions";


const initialState: IRegisterState = {
    newUser: new Users,
    registerFeedback: '',
  }
  
  export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
      
      case registerTypes.UPDATE_PASSWORD:
        return {
          ...state,
          newUser:{
              ...state.newUser,
              password: action.payload.password
            }
        }
        
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
      
      case registerTypes.CLEAR_REGISTER_MESSAGE:
      return {
          ...state,
          newUser:{
            ...state.newUser,
          feedbackMessage: ''
          }
      }
      
      case registerTypes.REGISTER:{
          return {
              ...state,
              newUser: new Users,  
          }
      } 
  
      case registerTypes.FAILED_REGISTER: {
          return {
              ...state,
              registerFeedback: 'Incorrect Data'
          }
  
      }
    }
    return state;
  }