import React , {useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from '../store/actions/authAtions'
const Logout = ({auth:{uid} , signout}) => {
    useEffect(()=>{
         signout()
    })
    if(!uid) return <Redirect to='/'/>
    return (
        <div>
            <h1 style={{color:'white'}}>hello</h1>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>({
    signout : ()=>dispatch(actions.signOut())
})
const mapStateToProps = (state )=>({
    auth : state.firebase.auth
})
export default connect(mapStateToProps , mapDispatchToProps)(Logout)
