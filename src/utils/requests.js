
const Api_Key = '34246d208052703db4c8ed20b591cfdf'
const requests ={
      fetchTending : `/trending/all/week?api_key=${Api_Key}&language=en-US`,
      fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
      fetchToRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
      fetchActionMovies : `/discover/movie?api_key=${Api_Key}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
      fetchHorrorMovies : `/discover/movie?api_key=${Api_Key}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
}
export default requests
