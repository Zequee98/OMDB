import React from 'react';
import { Link } from 'react-router';
import store from '../store.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator';

function Main (props){
    return (
      <center>
        <div>
          <h1>
            <Link to='/#'>  OMDB  </Link>
          </h1>
            <form>
              <input placeholder='Ussername' type='text'></input>
              <input placeholder='Password' type='password'></input>
              <button>Loggiar</button>
            </form>
          <p>Si no tienes cuenta: <Link to='/register'> Registarse </Link></p>
          {React.cloneElement(props.children, props)}
        </div>
      </center>
    )
};

function mapStateToProps(state){
  return {
    movies: state.movies,
    movie: state.movie,
    favoritos: state.favoritos,
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
