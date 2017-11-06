import React from 'react';
import axios from 'axios';
import Search from '../components/Search.jsx';
import SearchResult from '../components/SearchResult.jsx';
import MovieSlct from '../components/MovieSlct.jsx';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buscador: null,
    }
    this.cambiar = this.cambiar.bind(this)
    this.search = this.search.bind(this)
  };

  cambiar(e) {
    this.setState({buscador: e.target.value})
  };

  search(e) {
    if(e) e.preventDefault();
    axios.get('http://www.omdbapi.com/?apikey=20dac387&s=' + this.state.buscador).then((movie) => {
      // console.log(movie)
      this.props.searchMovies(movie.data.Search)
    })
    this.props.router.push({
      pathname: '/',
      query: {
        s: this.state.buscador,
      },
    });
  };

  componentWillUpdate(newProps) {
  if(newProps.location.query.s !== this.props.location.query.s) {
    this.setState({
      buscador: newProps.location.query.s
    },
      this.search
    )
  }
}

componentDidMount(){
  if(this.props.location.query.s){
    this.setState({
    buscador: this.props.location.query.s
  },
  this.search
)
}
};

  render() {
    return (
      <center>
        <div>
          <Search
            value={this.state.buscador}
            cambiar={this.cambiar}
            search={this.search}
          />
          <SearchResult
            Movie = {this.props.movies}
          />
        </div>
      </center>
    )
  }
};

export default SearchContainer;
