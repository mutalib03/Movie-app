import "./search.styles.js"
import { SearchForm, Input, ButtonSearch, MovieDetails,MovieCard,MovieImage, MovieTitle, MovieDetail  } from "./search.styles.js";
import MovieCategory from "../moviecategory/movieCategory.js";
import { useState } from "react";
 import {ActionMovies,RomanceMovies} from "../movies";

 const SearchComponent = () => {
    const [movie, setMovie] = useState("")
    const [data , setData] = useState(null)
    
 
  const handleSubmit = (e) => {
 e.preventDefault()

 fetch(`http://www.omdbapi.com/?t=${movie}&apikey=51de1062`)
 .then(response => response.json())
 .then(data => setData(data))
  }

  console.log(data)
    return ( 
   <div>
<SearchForm onSubmit={handleSubmit}>
<Input onChange={(e) => setMovie(e.target.value)} type="search" placeholder="Search...." value={movie}/>
<ButtonSearch type="submit">SEARCH</ButtonSearch>
 </SearchForm>

{
data ?

<MovieCard>

<MovieImage src={data.Poster}/>
 <MovieDetails>
 <MovieTitle>
{data.Title}
 </MovieTitle>
  
   <MovieDetail >{data.Plot}</MovieDetail>
    <MovieDetail>Genre: {data.Genre}</MovieDetail> 
     <MovieDetail>Language: {data.Language}</MovieDetail>  
      <MovieDetail>Actors: {data.Actors}</MovieDetail> 

 </MovieDetails>

 <i className="fa fa-close" style={{fontSize:"48px",cursor:"pointer"}}onClick={()=> setData(null)}></i>



</MovieCard>

:
  (
  <>

   <MovieCategory  category="action" list={ActionMovies}/>
    <MovieCategory  category="romance" list={RomanceMovies}/>
 

  </>
   
    
  )
}
 </div>

     );
}
 
export default SearchComponent;