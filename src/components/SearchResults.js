import React, { Component } from 'react'
import SearchStore from '../stores/SearchStore'
import { browserHistory } from 'react-router'

export default class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      shows: SearchStore.getShows()
    }
    this._onChange=this._onChange.bind(this);
  }

  componentWillMount(){
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    SearchStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      shows: SearchStore.getShows()
    })
    console.log('state:', this.state)
  }

  render() {

    let { shows } = this.state;
    let showList = null;

    if (shows) {
      showList = shows.map((show, i) => {
        return (
          <li key={show.show.id}>
            {show.show.name}
            <button className="btn btn-sm btn-default">Favorite</button>
          </li>
        )
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
