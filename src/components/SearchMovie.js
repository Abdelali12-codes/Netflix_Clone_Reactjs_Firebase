import React,{useState , useEffect , useRef} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'


const SearchComponent = styled.div`  
width :100% ;
height : 8vh ;
overflow : hidden ;
background : rgba(0 , 0 ,0 ,1) ;
display : grid ;
grid-template-columns : 1fr 2fr ;
`;
const SearchBody =styled.div`
position : fixed  ;
width :100% ;
height : ${props => props.isclosed ? `0px` : `100%` } ;
z-index : 5 ;
overflow : hidden ;
background : rgba(0 , 0 ,0 ,1) ;
` ;
const Grid = styled.div`
position :relative ;
width :100% ;
height : 100% ;
display : grid ;
grid-template-columns : 4fr ;
justify-content : center ;

`;
const Header1 = styled.div`
      width : 100% ;
      height : 8vh ;
`;
const Header2 = styled.div`
      width : 100% ;
      height : 8vh ; 
`;
const SearchMovie = ({close , onclosefun})=>{
    const [movies , setMovies] = useState([])
    const [movie , setMovie] = useState({})
    const [query , setQuery] = useState('') ;
    const [value , setValue] = useState('')
    const [trailerUrl , setTrailerUrl] = useState('')
    const inputRef = useRef()
    const options ={
        height : '390' , 
        width : '100%' , 
        playerVars :{
            autoplay : 0
        }
    }
    const base_url = 'https://image.tmdb.org/t/p/original/'
    const instance = axios.create({
        baseURL :'https://api.themoviedb.org/3'
    })
    const Api_Key ='34246d208052703db4c8ed20b591cfdf'
    useEffect(()=>{
       fetchData(query)
      // console.log('abdelali')
    },[query , value])
    const fetchData = (query) =>{
        instance.get(`search/movie?api_key=${Api_Key}&query=${query}&language=en-US&page=1`)
        .then(res =>{
            setMovies(res.data.results)  
            setMovie(res.data.results[Math.floor(Math.random()* res.data.results.length-1)])//
        })
        .catch(err =>{
            console.log(err)
        })
        // trailer movie
         handleClick(movie)
       
    }
    const handleSubmit = (e)=>{
      e.preventDefault() ;
      setQuery(inputRef.current.value)
      setValue(inputRef.current.value)
    }
    const handleClick = (movie)=>{
       // console.log(movie)
        if(trailerUrl){
            setTrailerUrl("")
        }else{ 
          
            movieTrailer(movie?.original_title || "")
            .then(url =>{
                 const urlParams = new URLSearchParams(new URL(url).search)
                 setTrailerUrl(urlParams.get('v'))
               //  console.log(urlParams.get('v'))
            }).catch(err =>{
                console.log(err)
            }) 
        } 
    }
    return(
        <>
        <SearchBody isclosed={close}>
         <SearchComponent >
             <Header1>
                 <IconButton style={{color:'white'}} onClick={onclosefun}>
                     <ArrowBackIcon/>
                 </IconButton>
             </Header1>
             <Header2>
              <div>
                  
                  <IconButton style={{color:'white'}} onClick={handleSubmit}>
                      <SearchIcon/>
                  </IconButton>
                  <input type="text" placeholder='Search....' className='netflix__search'
                    ref={inputRef}
                  />
              </div>
             </Header2>
         </SearchComponent>
          <Grid>
          <div style={{ overflow:'auto' , height:'100%' , width:'60%' , justifySelf:'center' ,paddingLeft:'5%'}}>
              {/* {
                 movie?.original_title && handleClick(movie)
              } */}
              <div>
              { trailerUrl && <Youtube videoId={trailerUrl} opts={options}/>}
              </div>
             {
                 movies.map(movie =>{
                     return movie.poster_path && <img key={movie.id} src={`${base_url}${movie?.poster_path}`} 
                     width='200px' height='200px' style={{margin:'5px 5px 0 0'}}
                     onClick={()=>handleClick(movie)}/>
                 })
             }
             
           </div> 
           {
               setTimeout(()=>{
                   setValue('abdelali')
               }, 2000)
           } 
           </Grid>
         </SearchBody>
        </>
    )
}

export default SearchMovie