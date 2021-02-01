import * as actions from './actionsTypes'

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
    
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
       
      });
  
    }
  }
  
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        console.log('signed out')
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }


  


export const signUp = (data) => async (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      var uid ;
     
    try{
     await  firebase.auth().createUserWithEmailAndPassword(
       data.email, 
       data.password)
      dispatch({type : actions.SIGNUP_SUCCES})
       uid = firebase.auth().currentUser.uid ;

     firestore.collection('users')
     .doc(uid).set({
        firstName : data.firstName ,          
        lastName : data.lastName ,
        initials : data.firstName[0] + data.lastName[0] ,
     }).then(resp=>{
        console.log('the user signed up succefulyy')
      
     }).catch(err=>{
         alert(err.message)
     })
     }catch(err){ 
        dispatch({ type : actions.SIGNUP_ERROR , err})
     }};
  export const retrieveData = ()=> async(dispatch , getState , {getFirebase , getFirestore})=>{
    const {uid} = getState().firebase.auth
    //  const firebase = getFirebase()
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    await firestore.collection('notifications').doc(uid).get()
    .then(doc=>{
      if(doc.exists){
        alert(JSON.stringify(doc.data()))}
      })
    alert(JSON.stringify(profile))
  }

  export const Modifie = ()=>async (dispatch , getState , {getFirebase , getFirestore})=>{
    const firebase = getFirebase() ;
    const firestore = getFirestore()  ;
    const {uid} = getState().firebase.auth  ;

    firestore.collection('notifications').doc(uid)
    .update({
       arrayExample : firebase.firestore.FieldValue.arrayUnion('abdelali') ,
      
    }).then(()=>{
      console.log('the user updated succefully')
    })
  }

