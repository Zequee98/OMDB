function favoritos(state = [], action){
  switch (action.type) {
    case 'ADD_FAV':
    // console.log('REDUCER', state)
      return [
        ...state.slice(),
        action.movie,
      ]
    case 'REMOVE_FAV' :
      let i = action.index
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
};

export default favoritos;
