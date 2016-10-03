import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import FavStore from '../stores/FavStore'

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favs: FavStore.getFavs()
    }
    this._onChange=this._onChange.bind(this);
  }

  componentWillMount(){
    FavStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    FavStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      favs: FavStore.getFavs()
    })
    console.log('state:', this.state)
  }

  render() {
    let { favs } = this.state;
    let showList = favs.map((fav, i) => {
      return (
        <li key={i}>
          {fav}
          {/* <button onClick={() => this._favoriteShow(show.show.name)} className="btn btn-sm btn-default">Favorite</button> */}
        </li>
      )
    })

    return (
      <div>
        <ul>
          {showList}
        </ul>
      </div>
    )
  }
}
