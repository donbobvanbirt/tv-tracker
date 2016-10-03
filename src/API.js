import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  searchShows(query) {
    get(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => {
      let data = res.data;
      // console.log('data', data);
      ServerActions.receiveData(data);
    })
    .catch(console.error)
  }
}

export default API;
