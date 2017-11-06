import { combineReducers } from 'redux';

import favoritos from './favoritos.js';
import movies from './movies.js';
import movie from './movie.js';

const rootReducer = combineReducers({ favoritos, movies, movie });

export default rootReducer;
