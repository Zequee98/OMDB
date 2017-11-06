import React from 'react';
import axios from 'axios';
import MovieSlct from '../components/MovieSlct.jsx';

class MovieContainer extends React.Component {

  componentDidMount (e) {
    //  e.preventDefault();
    axios.get('http://www.omdbapi.com/?apikey=20dac387&t=' + this.props.params.nombre)
      .then((movie) => {
        // console.log(movie)
        this.props.soloMovie(movie.data)
    })
  };

  back(){
    this.props.router.goBack()
  }

  render() {
    return (
      <center>
        <div>
          <MovieSlct
            Moviee = {this.props.movie}
            Back = {this.back.bind(this)}
            addFav = {this.props.addFav}
            favoritos = {this.props.favoritos}
            removeFav = {this.props.removeFav}
          />
        </div>
      </center>
    )
  }
};

export default MovieContainer;
