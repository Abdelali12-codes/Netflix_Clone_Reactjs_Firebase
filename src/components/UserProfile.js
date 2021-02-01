import React from 'react'
import styled from 'styled-components'
import logo1 from '../images/avatar1.png'
import logo2 from '../images/avatar2.png'
import logo3 from '../images/avatar3.jpg'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {NavLink } from 'react-router-dom'
const Wrapper = styled.div`
       position : fixed ;
       top : 0 ;
       z-index : 8 ;
       overflow : hidden ;
       width : 100% ;
       height : 100% ;
       background : black ;
      
`;
const Middle = styled.div`
       position : relative ;
       width : 60% ;
       height : 50% ; // 30% for the avatar and 20% for the name
       
       display : grid ;
       grid-template-columns : 1fr 1fr 1fr 1fr ;
       grid-gap : 5px ;
`;
const Item = styled.div`
      width : 100% ;
      height : 100% ;
     
      
`;
const Container = styled.div`
      position : relative ;
      width : 100% ;
      height : 92vh ;
      display : flex ;
      justify-content : center ;
      align-items : center ;
`;
const Header = styled.div`
       width : 100% ;
       height : 8vh ;
       
`
const UserProfile = () => {
    return (
        <>
         <Wrapper>
             <Header>
                 <NavLink to='/movies'>
                     <IconButton style={{color:'white'}}>
                         <ArrowBackIcon/>
                     </IconButton>
                 </NavLink>
             </Header>
          <Container>
            <Middle>
                <Item>
                 <img src={logo1} alt='' height='70%' width='100%'/>
                 <div style={{display:'flex' , justifyContent:'center' ,
                alignItems:'center' , width : '100%' , height:'30%'}}>
                     <span style={{color:'white'}}>Abdelali</span>
                 </div>
                </Item>
                <Item>
                <img src={logo3} alt='' height='70%' width='100%'/>
                 <div style={{display:'flex' , justifyContent:'center' ,
                alignItems:'center' , width : '100%' , height:'30%'}}>
                     <span style={{color:'white'}}>Abdelali</span>
                 </div>
                </Item>
                <Item>
                <img src={logo2} alt='' height='70%' width='100%'/>
                 <div style={{display:'flex' , justifyContent:'center' ,
                alignItems:'center' , width : '100%' , height:'30%'}}>
                     <span style={{color:'white'}}>Abdelali</span>
                 </div>
                </Item>
                <Item>
                <img src={logo3} alt='' height='70%' width='100%'/>
                 <div style={{display:'flex' , justifyContent:'center' ,
                alignItems:'center' , width : '100%' , height:'30%'}}>
                     <span style={{color:'white'}}>Abdelali</span>
                 </div>
                </Item>
            </Middle>
          </Container>
         </Wrapper>
        </>
    )
}

export default UserProfile
