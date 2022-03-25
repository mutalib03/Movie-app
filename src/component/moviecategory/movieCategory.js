import { GridContainer, GridItem,CategoryTitle} from "./movieCategory.style"


const MovieCategory = (props) => {
   const {category, list} = props
    return (
       
       <>

        <CategoryTitle>
         {category}
       </CategoryTitle> 
        <GridContainer>

  {  
      list.map(movie => (

        <GridItem key={movie.id} poster={movie.Poster}/>
     
      ))
  }
  

  
        </GridContainer>
   
 
       </>
      
      );
}
 
export default MovieCategory;