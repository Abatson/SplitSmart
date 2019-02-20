
import { ssClient } from "../../axios/ss.client";

export const registerTypes = {
    UPDATE_USERNAME: 'REGISTER_UPDATE_USERNAME',
    UPDATE_PASSWORD: 'REGISTER_UPDATE_PASSWORD',
    UPDATE_DISPLAY_NAME: 'REGISTER_UPDATE_DISPLAY_NAME',
    UPDATE_FIRST_NAME: 'REGISTER_UPDATE_DISPLAY_NAME',
    UPDATE_LAST_NAME: 'REGISTER_UPDATE_DISPLAY_NAME',
    UPDATE_EMAIL: 'REGISTER_UPDATE_EMAIL',
    UPDATE_PHONE: 'REGISTER_UPDATE_PHONE',
    REGISTER: 'REGISTER',
    FAILED_REGISTER: 'FAILED_REGISTER',
    CLEAR_REGISTER_MESSAGE: 'CLEAR_REGISTER_MESSAGE'
  }
  

  //for the action to clear a message we dont really need to send any data,
  //the reducer can just set the message to empty string when it gets this type
  export const clearMessage = () => {
    return {
        payload:{
        },
        type: registerTypes.CLEAR_REGISTER_MESSAGE
    }

}

//takes in a password value and sends it to the reducer to be written to state
export const updatePassword = (password:string) => {
    return {
        payload:{
            password
        },
        type: registerTypes.UPDATE_PASSWORD
    }

}

//takes in a username value and sends it to the reducer to be written to state
export const updateUsername = (username:string) => {
    return {
        payload:{
            username
        },
        type: registerTypes.UPDATE_USERNAME
    }

}

export const updateDisplayName = (displayName:string) => {
    return {
        payload:{
            displayName
        },
        type: registerTypes.UPDATE_DISPLAY_NAME
    }

}

export const updateFirstName = (firstName:string) => {
    return {
        payload:{
            firstName
        },
        type: registerTypes.UPDATE_FIRST_NAME
    }

}

export const updateLastName = (lastName:string) => {
    return {
        payload:{
            lastName
        },
        type: registerTypes.UPDATE_LAST_NAME
    }

}

export const updateEmail = (email:string) => {
    return {
        payload:{
            email
        },
        type: registerTypes.UPDATE_EMAIL
    }

}

export const updatePhone = (phone:string) => {
    return {
        payload:{
            phone
        },
        type: registerTypes.UPDATE_PHONE
    }

}


//takes in a username and password and attempts to login to the api with them
//this method is asyncronous so we have to use the dispatch method
//you notice that our declaration is a little weird, but this is the way we have to do it
export const registerRequest = (username, password, displayName, firstName, lastName, email, phone) => async (dispatch ) => {
    
    const credentials = {
        username: username,
        password: password,
        displayName: displayName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    }
    try {
      const res = await ssClient.post('/register', credentials);
      console.log(res)
      //when doing an async action, we have to call the dispatcher ourselves
      //this is the same thing as returning the payload up above in our other methods
      dispatch({
          payload:{
            user: res.data
          },
          type: registerTypes.REGISTER
      })
      
    } catch (err) {
        //impediment, how to get api message from error
      console.log(err);
      dispatch({
        payload:{
        },
        type: registerTypes.FAILED_REGISTER
    })
      
      
    }
  
  }