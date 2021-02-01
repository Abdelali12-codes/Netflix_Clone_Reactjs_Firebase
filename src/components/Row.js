import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const Row = ({title , url}) => {
    
    const [movies , setMovies] = useState([]) ;
    const [trailerUrl , setTrailerUrl] = useState("")
    const options ={
        height : '390' , 
        width : '100%' , 
        playerVars :{
            autoplay : 1
        }
    }
    const base_url = 'https://image.tmdb.org/t/p/original/' 
     useEffect(()=>{
         async function fetchData(url){
             const response = await axios.create({
                 baseURL: 'https://api.themoviedb.org/3',
             }).get(url) ;
             setMovies(response.data.results)
         }
         fetchData(url)
     } ,[])
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            console.log(movie)
            movieTrailer(movie?.original_title || "")
            .then(url =>{
                
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search) ;
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            }).catch(error =>{
                console.log(error)
            })
        }
    }
    return (
        <div>
            <h1 style={{color:'white' , textAlign:'start'}}>{title}</h1>
            <div className="row__container">
                {
                    movies.map((movie )=>{
                    return <img src={`${base_url}${movie.poster_path}`} alt=''
                              onClick={()=>handleClick(movie)}
                              key={movie.id} className="row__image"/>
                })
                }
            </div>
           {trailerUrl && <Youtube videoId={trailerUrl} opts={options}/>}
        </div>
    )
}

export default Row
