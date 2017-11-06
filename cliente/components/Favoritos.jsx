import React from 'react';
import { Link } from 'react-router'

const Favoritos = function(props) {
  <div>
    <h1>Mi lista de favoritos</h1>
  </div>
  if (!props.favoritos) return (<div><p>No tienes favoritos</p></div>)
  return props.favoritos.map((art) => {
    return(
      <div>
         <h3> { art.Title } </h3>
         <p>{ art.Year }</p>
         <Link to={ '/movie/' + art.Title }><img src={ art.Poster } /></Link>
         <p> Argumento de la pelicula : {art.Plot}</p>
         <p>-----------------------------------------------------</p>
      </div>
    )
  })
}

export default Favoritos
