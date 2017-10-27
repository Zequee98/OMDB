import React from 'react';
import { Link } from 'react-router'

const SearchResult = function(props){
  if (!props.Movie) return (<div><p>Buscar pelicula </p></div>)
  return props.Movie.map((art) => {
   return(
     <div>
      <div>
        <h1>Resultados</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <div className="content">
                <img src={ art.Poster } className="img-responsive" />
                <div className="caption">
                  <h3>
                    <Link to={ '/movie/' + art.Title }>
                      { art.Title }
                    </Link>
                  </h3>
                  <p>
                      { art.Year }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
  })
}

export default SearchResult;
