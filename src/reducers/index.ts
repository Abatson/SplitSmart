import { combineReducers } from "redux";
import { Users } from "../models/Users";
import { loginReducer } from "./Login.reducer";

//this represents the state needed by one of our components.
//To log in, we need to keep track of the username and password that the use inputs
//And we need to set the error message if they fail, and get the user info if they succeed
//this information is then checked out in the Login.container file
export interface ILoginState{
    user: Users,
    username: string,
    password: string,
    feedbackMessage: string
}


//This interface represents the entirety of our store. All of the state of the program.
//We make it out of other more specific interfaces.
//Also, every interface here needs a reducer of the same name down in combine reducers
export interface IState {
    login: ILoginState,
    
}


//This needs a reducer with the name of every interface we have in the IState interface
export const state = combineReducers<IState>({
    login: loginReducer,
})