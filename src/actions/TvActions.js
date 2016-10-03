import API from '../API'

const TvActions = {
  searchShows(showName) {
    API.searchShows(showName);
    // console.log('show', showName);
  }
}

export default TvActions;
