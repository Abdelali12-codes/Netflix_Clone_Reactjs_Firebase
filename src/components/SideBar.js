import React from 'react'
import avatar from '../images/avatar.png'
import styled from 'styled-components'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import IconButton from '@material-ui/core/IconButton'
import {NavLink} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import ListDividers from './Divide'
const Container = styled.div`
    position : fixed ;
  
    top : 0 ;
    width : 100% ;
    z-index : 6 ;
     overflow : hidden ;
    height : ${props => props.isclosed ? `0px` : `100%`} ;
    background : rgba(0 , 0 ,0 ,0.7)
`;

const SideB = styled.div`
      position : relative ;
      width : 35% ; 
      padding-top: 10px ;
      height : 100vh ;
      background : rgba(41, 38, 38, 1)
`;
const Header = styled.div`
     width : 100% ;
     height : 8vh ; 
     display : flex ;
     padding : 10px ;
     align-items : center ;
     justify-content : space-between
`;
// the sidebar 

const SideBar =({close , onclosefun})=>{
    return(
        <>
         <Container isclosed={close} >
             <SideB>
                 <Header>
                   <div style={{height:'6vh'  ,width:'10vw' , display:'flex' , justifyContent:'center'
                    , alignItems :'center' }}>
                    <div style={{display:'flex' ,  justifyContent:'center'
                       , alignItems:'center' , marginRight:'4px' , height:'100%' , width:'50px'}}>
                      <img src={avatar} width='100%' height='100%'  alt=''/>
                    </div>
                     <p>
                         Abdelali
                     </p>
                   </div>
                <NavLink to='/profile'>
                   <IconButton>
                       <SyncAltIcon/>
                   </IconButton>
                </NavLink>
                 </Header>
                <ListDividers/>
             </SideB>
         </Container>
        </>
    )
}
export default SideBar