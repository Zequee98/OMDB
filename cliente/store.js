import { createStore, compose } from 'redux';

// Importo los reducers
import rootReducer from './reducers';

// Importo los datos que vamo a usar por defecto


// Creo un objeto con el stado por defecto
const defaultState = {
  favoritos : [],
  movies : [],
  movie: [],
}


// plugin de development
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

// creo el store
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
