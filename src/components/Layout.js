import React, { Component } from 'react'

import { Link } from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;

    return (
      <div className='container'>
        <nav className="navbar navbar-inverse">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand"><Link to ='/search'>TV Search</Link></div>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li role="presentation" className={classNames({active: path === '/favorites'})}><Link to ='/favorites'>Favorites</Link></li>
            </ul>
          </div>

        </nav>

        <div className='center'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
