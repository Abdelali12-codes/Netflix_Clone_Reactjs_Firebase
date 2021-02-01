import React , {useState , useEffect , useRef} from 'react'
// import axios from 'axios' :
import logo from '../svg/logo.svg'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import SearchMovie from './SearchMovie'
import SideBar from './SideBar'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//import {animateScroll as scroll} from 'react-scroll'

const Anchor = styled.div`
     position : fixed;
     width : 150px ;
     height : 90px ;
     top : 20px ;
     right : 20px ;
     display : flex ;
     background :grey ;
     z-index : 8 ;
     padding : 7px 0 ;
     flex-direction : column ;
     justify-content : space-between ;
     overflow : hidden ;
     border-radius : 4px ;
     color : white ;
`;
const Navbar = () => {
    const [close , setClose ] = useState(true)
    const [closeside , setCloseside] = useState(true)
    const [display , setDisplay] = useState(false)
    const onclosefun = ()=>{
        //alert('abdealli')
        setClose(!close)
    }
    const onclosesidefun =()=>{
        setCloseside(!closeside)
    }
    const handleDisplay = ()=>{
        setDisplay(!display)
       
    }
    window.onscroll = function(){ Myfunction()}
    const Myfunction = ()=>{ 
        const scroll = document.body.scrollTop || document.documentElement.scrollTop
      
        const navbar = document.querySelector('.netflix__navbar') 
        if(document.body.scrollTop > 2 || document.documentElement.scrollTop > 2){
            navbar && navbar.classList.add('opacity')
        }else{
            const navbar = document.querySelector('.netflix__navbar')
            navbar && navbar.classList.remove('opacity')
        }
    }
    return (
        <>
            <nav className='netflix__navbar'>
                <ul className='netflix__list'>
                    <li className='list__items'>
                        <IconButton style={{color:'white'}} onClick={onclosesidefun}>
                            <MenuIcon/>
                        </IconButton>
                    </li>
                    <li className='list__items'>
                        <img src={logo} width='100px' height='100%'/>
                    </li>
                </ul>
                <ul className='netflix__list'>
                    <li className='list__items'>
                        <IconButton style={{color:'white'}}
                         onClick={onclosefun}
                        >
                            <SearchIcon/>
                        </IconButton>
                    </li>
                    <li className='list__items' >
                        <IconButton style={{color:'white'}} onClick={handleDisplay}>
                            <MoreHorizIcon/>
                        </IconButton>
                        {/* ><Anchor dispaly={display}/> */}
                       { display ? ( <Anchor onClick={handleDisplay} >
                            <NavLink to='/'>
                                <span style={{color:'white'}}>Settings</span>
                            </NavLink>
                            <NavLink to='/logout'>
                                <span style={{color:'white'}}>Log out</span>
                            </NavLink>
                        </Anchor>):null}
                    </li>
                </ul>
            </nav>
            <SearchMovie close={close} onclosefun={onclosefun}/>
            <SideBar close={closeside} onclosefun={onclosesidefun} />
        </>
    )
}

export default Navbar


