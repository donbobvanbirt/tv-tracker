import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveData(data) {
    // console.log('data in ServerActions', data);
    AppDispatcher.dispatch({
      type: 'RECEIVE_SHOWS',
      payload: { data }
    })
  }
}

export default ServerActions;
