import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/messaging'


var config = {
    apiKey: "AIzaSyDT7K7NoHJEgSPLIcBCJYw8ygy79gaXKuM",
    authDomain: "react-firebase-auth-58e46.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-58e46.firebaseio.com",
    projectId: "react-firebase-auth-58e46",
    storageBucket: "react-firebase-auth-58e46.appspot.com",
    messagingSenderId: "620107259945",
    appId: "1:620107259945:web:dfbd683426fa48b3f8bc38",
    measurementId: "G-57SCLFW9RH"
};

firebase.initializeApp(config) ;

export default firebase ;
