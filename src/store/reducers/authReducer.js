import * as actions from '../actions/actionsTypes'

const initialState = {
    login : false ,
    singup : false ,
    logout : false
}

const authReducer =(state = initialState , action)=>{
           switch(action.type){
               case actions.LOGIN_SUCCES :
                   return {
                       ...state , login : true
                   }
                case actions.SIGNUP_SUCCES :
                    return {
                        ...state , singup : true ,
                    }
                case actions.SIGNOUT_SUCCES : 
                    return {
                        ...state , logout : true 
                    }
                default :
                 return state ;
            }
}

export default authReducer ;