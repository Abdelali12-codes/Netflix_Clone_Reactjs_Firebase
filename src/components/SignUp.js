import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Login.css'
import * as actions from '../store/actions/authAtions'

const SignUp = ({auth:{uid} , signup}) => {
    useEffect(()=>{

    })
  
    const formik = useFormik({
        initialValues:{
            firstName : '' ,
            lastName : '' ,
            email :'' ,
            password :'' ,
            passwordconfirm:''
           
        },
        validationSchema : Yup.object({
            firstName : Yup.string()
            .max(20 , 'Must be 20 characters and less')
            .required('this field is required') ,
            lastName : Yup.string()
            .max( 20 ,' Must be 20 characters or less')
            .required('this field is required') ,
            email : Yup.string()
            .email('this email is invalid')
            .required('this field is required') ,
            password : Yup.string()
            .min( 10 , 'the password must containe 10 characters or more')
            .required('this field is required') ,
            passwordconfirm: Yup.string()
            .min( 10 , 'the password must containe 10 characters or more')
            .required('you have to confirm your password')
            .oneOf([Yup.ref('password') , null] , `the password doesn't match`)
            

        }),
        onSubmit : async values =>{
        
            await signup(values)

        }
    })
    if(uid) return <Redirect to='/movies'/>
    return (
        <>
          <div id="vertical-flip" className="card">
 <div className="flip">
  <div className="front">
   <div className="logo">
    <img src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png" alt="Netlflix"/>
   </div>
  </div>

  <div className="back">
   <form onSubmit={formik.handleSubmit}>
    <div className="box-input">
        {/* the first Name field */}
    <input type="text" name="firstName" placeholder="your firstName..." 
     className='input'
     value={formik.values.firstName} onChange={formik.handleChange} required/>
     {/* the first name field error */}
     {formik.touched.firstName && formik.errors.firstName ?
               (<div style={{color:'red'}}>{formik.errors.firstName}</div>) : null}
               {/* the last Name field */}
    <input type="text" name="lastName" placeholder="your lastName..." 
     className='input'
     value={formik.values.lastName} onChange={formik.handleChange} required/>
     {/* the last Name field Error */}
      {formik.touched.lastName && formik.errors.lastName ?
               (<div style={{color:'red'}}>{formik.errors.lastName}</div>) : null}
               {/* the email field */}
     <input type="email" name="email" placeholder="your email..." 
     className='input'
     value={formik.values.email} onChange={formik.handleChange} required/>
     {/* the email field error */}
      {formik.touched.email && formik.errors.email ?
               (<div style={{color:'red'}}>{formik.errors.email}</div>) : null}
               {/* the password field error */}
     <input type="password" name="password" placeholder="your password..." 
     className='input'
     value={formik.values.password} onChange={formik.handleChange} required/>
     {/* the password field error */}
      {formik.touched.password && formik.errors.password ?
               (<div style={{color:'red'}}>{formik.errors.password}</div>) : null}
               {/* the confirm password field */}
               <input type="password" name="passwordconfirm" placeholder="your password..." 
     className='input'
     value={formik.values.passwordconfirm} onChange={formik.handleChange} required/>
     {/* the password field error */}
      {formik.touched.passwordconfirm && formik.errors.passwordconfirm ?
               (<div style={{color:'red'}}>{formik.errors.passwordconfirm}</div>) : null}
               {/* the confirm password field */}
     <button type="submit" className='button'>Sing Up</button>
    </div>
   </form>
       </div>
      </div>
    </div>
        </>
    )
}

const mapStateToProps = (state)=>({
    auth : state.firebase.auth
})
const mapDispatchToProps = (dispatch)=>({
    signup : (data)=>dispatch(actions.signUp(data))
})
export default connect(mapStateToProps , mapDispatchToProps)(SignUp)
