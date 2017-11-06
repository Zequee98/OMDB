import React from 'react';

const Moviee = function(props){
  if(!props.Moviee) return (<p>Cargando ...</p>)
  var movie = props.Moviee
  var favoritos = props.favoritos || []
  console.log('props', props)
  return(
      <div>
        <div>
          <h3> Titulo : {movie.Title} </h3>
          <p> Año : {movie.Year}</p>
          {
              favoritos.map(titulo => titulo.Title).includes(movie.Title)  ?
            <button
              onClick = {function borrarFav() {props.removeFav(favoritos.findIndex(move => move.Title === movie.Title))}} >Eliminar de  mis Favoritos
            </button>
            :
            <button
              onClick= {function agregarFav() {props.addFav(movie)}} >Agregar a Favorito
            </button>
          }
        </div>
        <div>
          <img src={ movie.Poster }  />
          <p> Argumento de la pelicula : {movie.Plot}</p>
          <p>Director : {movie.Director}</p>
          <p>Actores : {movie.Actors}</p>
        </div>
        <a href='#' onClick = {props.Back}> Volver atras </a>
      </div>
  )
}

export default Moviee
