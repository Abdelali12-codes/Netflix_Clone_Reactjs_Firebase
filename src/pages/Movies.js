import React , {useEffect} from 'react'
//import axios from 'axios'
// import {animateScroll as scroll} from 'react-scroll'
import {connect} from 'react-redux'
import requests from '../utils/requests'
import {Row , Banner , Navbar} from '../components'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
const Content = ({auth:{uid}}) => {
    const instance = axios.create({
        baseURL :'https://api.themoviedb.org/3' ,
        params:{
            api_key : '34246d208052703db4c8ed20b591cfdf'
        }
    })
   useEffect(()=>{
       async function fetchData(){
           const response = await instance.get('/movie/popular')
           console.log(response.data)
       }
       fetchData()
   })
   if(!uid) return <Redirect to='/'/>
    return (
        <div>
          <Navbar/>
          <Banner/>
          <Row title="Netflix Movies" url={requests.fetchNetflixOriginals}/>
          <Row title="trending" url={requests.fetchTending}/>
          <Row title="Horror Movies" url={requests.fetchHorrorMovies}/>
          <Row title="Comedy Movies" url={requests.fetchComedyMovies}/>
          <Row title="Actions Movies" url={requests.fetchActionMovies}/>
          <Row title="Romance Movies" url={requests.fetchRomanceMovies}/>
          <Row title="TopRated Movies" url={requests.fetchToRated}/>
          <Row title="Documentaries Movies" url={requests.fetchDocumentaries}/>
        </div>
    )
}

const mapStateToProps =(state)=>({
    auth :state.firebase.auth
})
export default connect(mapStateToProps)(Content)
