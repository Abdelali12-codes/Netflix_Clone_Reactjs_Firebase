import React, {useEffect , useState, useRef} from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const Search = () => {
    const [movies , setMovies] = useState([])
    const [query , setQuery] = useState('') ;
    const [trailerUrl , setTrailerUrl] = useState('')
    const inputRef = useRef()
    const options ={
        height : '390' , 
        width : '100%' , 
        playerVars :{
            autoplay : 1
        }
    }
    const base_url = 'https://image.tmdb.org/t/p/original/'
    const instance = axios.create({
        baseURL :'https://api.themoviedb.org/3'
    })
    const Api_Key ='34246d208052703db4c8ed20b591cfdf'
    useEffect(()=>{
       fetchData(query)
    },[query])
    const fetchData = (query) =>{
        console.log(query)
        instance.get(`search/movie?api_key=${Api_Key}&query=${query}&language=en-US&page=1`)
        .then(res =>{
            setMovies(res.data.results)  
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const handleSubmit = (e)=>{
      e.preventDefault() ;
      setQuery(inputRef.current.value)
    }
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.original_title || "")
            .then(url =>{
                 const urlParams = new URLSearchParams(new URL(url).search)
                 setTrailerUrl(urlParams.get('v'))
            }).catch(err =>{
                console.log(err)
            })
           
        }
    }
    return (
        <div>
           <h1>Hello</h1>
          <form onSubmit={handleSubmit}>
              <input type='text' placeholder='search for movie...' 
               name='movie' ref={inputRef}
              />
              <button type='submit'>search</button>
          </form>
        <ul>
         { 
            movies && movies.map(movie =>{
            return movie.poster_path && <li key={movie.id}>{movie.poster_path}</li>
            })
             
         }
         <div>
             {
                 movies.map(movie=>{
                     return movie.poster_path && <img src={`${base_url}${movie.poster_path}`}
                      alt={movie?.original_title} width='200px' height='200px' key={movie.id}
                      onClick={()=>handleClick(movie)}
                     />
                 })
              }
         </div>
         </ul>
         {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
        </div>
    )
}

export default Search
