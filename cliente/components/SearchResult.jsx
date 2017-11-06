import React from 'react';
import { Link } from 'react-router'

const SearchResult = function(props){
  if (!props.Movie) return (<div><p>Buscar pelicula </p></div>)
  return props.Movie.map((art) => {
   return(
     <div>
      <h1>Resultados</h1>
        <img src={ art.Poster } className="img-responsive" />
        <h3><Link to={ '/movie/' + art.Title }> { art.Title }</Link></h3>
        <p>{ art.Year }</p>
     </div>
   )
  })
}

export default SearchResult;
