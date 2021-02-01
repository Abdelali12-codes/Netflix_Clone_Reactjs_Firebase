import React , {useState , useEffect} from 'react'
import axios from 'axios'
import requests from '../utils/requests'
import {Icon} from 'react-icons-kit'
import {play3} from 'react-icons-kit/icomoon/play3'
import {plus} from 'react-icons-kit/icomoon/plus'
const Banner = () => {
    
    const [movie , setMovie] = useState({})
    const base_url = 'https://image.tmdb.org/t/p/original/' 
     useEffect(()=>{
         async function fetchData(){
             const response = await axios.create({
                 baseURL: 'https://api.themoviedb.org/3',
             }).get(requests.fetchNetflixOriginals) ;
             setMovie(response.data.results[
                 Math.floor(Math.random() * response.data.results.length -1 )
             ])
         }
         fetchData()
     } ,[])
    return (
        <div className='netflix__header'>
          {<img src={`${base_url}${movie?.poster_path}`} alt={movie?.title} className='netflix__image'/>}
            <div className='netflix__banner'>
              <h1 style={{color:'white'}}>
                  {movie?.name || movie?.original_name }
              </h1>
              <div className='netflix__button'>
               <button>
                   <span style={{marginRight:'5px'}}>
                   <Icon icon={play3} size={15}/>
                   </span>
                  Play
               </button>
               <button><span style={{marginRight:'5px'}}>
               <Icon icon={plus} size={10}/>
                   </span>My List</button>
              </div>
              <h2 style={{fontSize:'15px' , color:'white'}}>
                  {movie?.overview}
              </h2>
            </div>
           
        </div>
    )
}

export default Banner
