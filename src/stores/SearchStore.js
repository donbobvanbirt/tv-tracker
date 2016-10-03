import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _shows = null;

class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SHOWS':
          _shows = action.payload.data;
          // console.log('shows in sore', _shows);
          this.emit('CHANGE');
          break;
        default:

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getShows() {
    return _shows;
  }
}

export default new SearchStore;
