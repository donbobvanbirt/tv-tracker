import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import TvActions from '../actions/TvActions'
import SearchResults from './SearchResults'

export default class Search extends Component {
  constructor() {
    super();
    this._submitForm = this._submitForm.bind(this);

  }

  _submitForm(e) {
    e.preventDefault();
    let {name} = this.refs;
    let showName = name.value;
    // console.log('name', showName);
    name.value ='';

    TvActions.searchShows(showName);
  }

  render() {

    return (
      <div className="center">

        <form className="form-inline" onSubmit = {this._submitForm}>
          <div className="form-group">
            <label className="sr-only" >Search by Card Names</label>
            <input ref ='name' type="text" className="form-control"  placeholder="Show Name"/>
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>

        <SearchResults />
      </div>
    )
  }
}
