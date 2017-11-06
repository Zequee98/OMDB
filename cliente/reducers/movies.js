function movies(state=[], action){
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return action.movies
    default:
      return state
  }
}

export default movies;
