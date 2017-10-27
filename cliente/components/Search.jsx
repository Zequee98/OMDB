import React from 'react';

const Search = function (props){
 return(
 <div>
 <h1>Buscador de Peliculas:</h1>
   <form>
     <input
      type="text"
      name="buscador"
      placeholder="Buscar peliculas"
      value={props.buscador}
      onChange ={props.cambiar}
      />
     <button onClick={props.search}>Buscar</button>
   </form>
   <a href='/#/favoritos'> Mi lista de favoritos </a>
   </div>
 )
};

export default Search
