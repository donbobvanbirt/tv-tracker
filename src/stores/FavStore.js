import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _favs = [];

class FavStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'ADD_FAV':
          _favs.push(action.payload.show)
          console.log('favs in store:', _favs);
          this.emit('CHANGE');
          break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getFavs() {
    return _favs;
  }
}

export default new FavStore;
