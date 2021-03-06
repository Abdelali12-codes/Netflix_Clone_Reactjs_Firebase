import {combineReducers} from 'redux'
import authReducer from './authReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
const rootReducer = combineReducers({
    firebase : firebaseReducer ,
    firestore : firestoreReducer ,
    auth : authReducer
})

export default rootReducer