import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './Login.css'
// import './Input.scss'
import * as actions from '../store/actions/authAtions'
const Login = ({auth :{uid} , login}) => {

    const formik = useFormik({
        initialValues:{
            email :'' ,
            password :''
        },
        validationSchema : Yup.object({
            email : Yup.string()
            .email('this email is invalid')
            .required('this field is required'),
            password : Yup.string()
            .max(20 , 'Must be 20 characters or less')
            .required('this field is required')

        }),
        onSubmit : async values =>{
          
            await login(values)

        }
    })
     if(uid) return <Redirect to='/movies'/>
   
    return (
        <>
<div id="vertical-flip" class="card">
 <div class="flip">
  <div class="front">
   <div class="logo">
    <img src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png" alt="Netlflix"/>
   </div>
  </div>

  <div class="back">
   <form onSubmit={formik.handleSubmit}>
    <div class="box-input">
     {/* <div class="form__group field">
       <input type="input" class="form__field" placeholder="Name...s" name="name" id='name' required />
        <label for="name" class="form__label">Name</label>
     </div> */}
     <input type="email" name="email" placeholder="your email..." 
     className='input'
     value={formik.values.email} onChange={formik.handleChange} required/>
      {formik.touched.email && formik.errors.email ?
               (<div style={{color:'red'}}>{formik.errors.email}</div>) : null}
     <input type="password" name="password" placeholder="your password..." 
     className='input'
     value={formik.values.password} onChange={formik.handleChange} required/>
      {formik.touched.password && formik.errors.password ?
               (<div style={{color:'red'}}>{formik.errors.password}</div>) : null}
     <button type="submit" className='button'>Login</button>
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
    login : (data)=>dispatch(actions.signIn(data))
})
export default connect(mapStateToProps , mapDispatchToProps)(Login)
