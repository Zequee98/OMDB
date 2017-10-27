import React from 'react';
import axios from 'axios';
import MovieSlct from '../components/MovieSlct.jsx';

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie : '',
    }
    console.log('movie', this.state.movie)
  };


  componentDidMount (e) {
    //  e.preventDefault();
    axios.get('http://www.omdbapi.com/?apikey=20dac387&t=' + this.props.params.nombre)
      .then((movie) => {
        console.log(movie)
        this.setState({movie: movie.data})
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
            Moviee = {this.state.movie}
            Back = {this.back.bind(this)}
          />
        </div>
      </center>
    )
  }
};

export default MovieContainer;
