import AppDispatcher from '../AppDispatcher'

const FavoriteActions = {
  addFav(show) {
    // console.log('fav in store:', show);
    AppDispatcher.dispatch({
      type: 'ADD_FAV',
      payload: { show }
    })
  }
}

export default FavoriteActions;
