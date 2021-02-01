import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './css/App.css'
import * as serviceWorker from './serviceWorker';
// import {store} from './store'
import {createStore , applyMiddleware  } from 'redux'
import {reactReduxFirebase , getFirebase} from 'react-redux-firebase'
import {reduxFirestore , getFirestore} from 'redux-firestore'
import {composeWithDevTools} from 'redux-devtools-extension'
import firebase from './config/Firebase'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const rrfconfig ={
  userProfile: 'users', 
  useFirestoreForProfile: true, 
  attachAuthIsReady: true
}

const store = createStore(
  rootReducer , 
  composeWithDevTools(
    reactReduxFirebase(firebase , rrfconfig) ,
    reduxFirestore(firebase) ,
    applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore}))
  )
)


store.firebaseAuthIsReady.then(()=>{
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
     <App />
   </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
