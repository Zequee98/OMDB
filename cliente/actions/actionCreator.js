// Agregar peliculas favoritas
export function addFav(movie){
  return{
    type: 'ADD_FAV',
    movie,
  }
}

// Remover una pelicula favorita
export function removeFav(index){
  return{
    type: 'REMOVE_FAV',
    index,
  }
}

// Busca y muestra las peliculas
export function searchMovies(movies) {
  return{
    type: 'SEARCH_MOVIES',
    movies,
  }
}

// Busca y muestra la pelicula seleccionada
export function soloMovie(movie) {
  return{
    type: 'SEARCH_MOVIE',
    movie,
  }
}
