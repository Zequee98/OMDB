import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'

//Importar componentes

import Main from './components/Main';
import SearchContainer from './containers/SearchContainer.jsx';
import MovieContainer from './containers/MovieContainer.jsx';
import Favoritos from './components/Favoritos.jsx';
import store from 'store.js'

// Importo las dependencias de react-router que voy a usar
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

function moview(props) {
  return(
    <h1> {props.params.nombre} </h1>
  )
}

const router = (
  <Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={SearchContainer}/>
        <Route path='/movie/:nombre' component={MovieContainer} />
        <Route path = '/favoritos' component={Favoritos} />
      </Route>
    </Router>
  <Provider>
)

render(router, document.getElementById('root'));
