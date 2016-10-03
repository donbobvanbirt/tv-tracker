import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import SearchStore from '../stores/SearchStore'
import FavStore from '../stores/FavStore'

import FavoriteActions from '../actions/FavoriteActions'

export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      shows: SearchStore.getShows(),
      favs: FavStore.getFavs()
    }
    this._onChange=this._onChange.bind(this);
  }

  componentWillMount(){
    SearchStore.startListening(this._onChange);
    FavStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    SearchStore.stopListening(this._onChange);
    FavStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      shows: SearchStore.getShows(),
      favs: FavStore.getFavs()
    })
    console.log('state:', this.state)
  }

  _favoriteShow(show) {
    // console.log('fav show:', show);
    FavoriteActions.addFav(show);
  }

  render() {

    let { shows, favs } = this.state;
    let showList = null;


    if (shows) {
      showList = shows.map((show, i) => {
        // let isFav = false;
        // if (favs.includes(show)) {
        //   isFav = true;
        // }
        if (favs.includes(show)) {

          return (
            <li key={show.show.id}>
              {show.show.name}

              {/* <button onClick={() => this._favoriteShow(show.show.name)} className="btn btn-sm btn-default">Favorite</button> */}
            </li>
          )

          } else {
            return (
              <li key={show.show.id}>
                {show.show.name}

                <button onClick={() => this._favoriteShow(show.show.name)} className="btn btn-sm btn-default">Favorite</button>

              </li>
            )
          }

      })
    }

    return (
      <div>
        <ul>
          {showList}
        </ul>
      </div>
    )
  }
}
