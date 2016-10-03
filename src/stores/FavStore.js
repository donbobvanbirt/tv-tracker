import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

import Storage from '../Storage';

let _favs = Storage.read('favs') || [];

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

    this.on('CHANGE',() => {
      Storage.write('favs', _favs);
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
