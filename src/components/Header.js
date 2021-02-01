import React , {useRef} from 'react'
import logo from '../svg/logo.svg'
import {NavLink , Link} from 'react-router-dom'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {arrow_right} from 'react-icons-kit/ikons/arrow_right'
const HeaderComponent = styled.div`
   
   .signIn-btn{
       right : 0 ;
      
       margin : 1.125rem 3% 0 ;
       padding : 0.4375rem 1.0625rem ;
       line-height : normal ;
       border-radius : 0.1875rem ;
       font-size : 1rem ;
       background : var(--main-red) ;
       position : absolute ;
       transform : translate(-50% ,-50% ) ;
       transition : background 0.2s ease-in ;
       &:hover {
           background : var(--main-red-hover)
       }
      }
    .header-top{
        position : relative ;
        height : 10rem ;
        z-index : 1 ;
      }
      .header-content{
        width : 65% ;
        position : relative ;
        margin : 4.5rem auto 0 ;
        display : flex ;
        justify-content : center ;
        align-items : center ;
        text-align : center ;
        flex-direction : column ;
        z-index : 1 ;
       
      }
      .main-offer-btn{
        display : inline-block ;
        background : var(--main-red) ;
        text-transform : uppercase ;
        border : none ;
        outlined : none ;
        margin : 0 33% ;
        padding : 0.7rem ;
        border-radius : 0.1875rem ;
        font-size : 1.5rem ;
        text-align : center ;
        box-shadow : 0 1px 0 rgba(0 , 0 ,0 ,0.45) ;
        transition : background 0.2s ease-in ;
        cursor : pointer ;
      }
`
const Logo = styled.img`
    width : 10rem ;
    height : 3.5rem ;
    position : absolute ;
    top : 25% ;
    left : 50% ;
    transform : translate(-50% , -50%)
`;
const Title = styled.h1`
    margin : 0 0 1.2rem ;
    font-size : 5rem ;
    font-weight : 500 ;
    line-height : 1.1em ;
    color :white
`;
const SubTitle = styled.h2`
   font-weight : 400 ;
   font-size : 1.875rem ;
   line-height : 1.25em ;
   margin : 0 0 1.875rem ;
   text-transform : uppercase ;
   color : white
`; 
export const getAccessToken = ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial , item)=>{
      //  var parts = 
       var parts = item.split('=') ;
       initial[parts[0]] = decodeURIComponent(parts[1]) ;
       return initial
     },{})
   // console.log(url)
  }
const Header = () => {
 
  const url = getAccessToken()
  window.location.hash =""
  console.log(url.access_token)
  const ref = useRef(0)
    return (
      <HeaderComponent className='header-container'>
            <div className='header-top'>
              <Logo src={logo} alt=''/>
              <NavLink to='/signin' className='signIn-btn'>
                  Sign In
              </NavLink>
            </div>
            <div className='header-content'>
              <Title>See what'is next.</Title>
              <SubTitle>WATCH ANYWHERE.CANCEL ANYTIME</SubTitle>
              <Link to='/signup' className='main-offer-btn'>try it now
               <Icon icon={arrow_right} size={37}/>
              </Link>
            </div>
            {
              ref.current++
            }

      </HeaderComponent>
    )
}

export default Header
