function movie(state={}, action){
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return action.movie
    default:
      return state
  }
}

export default movie;
