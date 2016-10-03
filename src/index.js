import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Favorites from './components/Favorites'
import Search from './components/Search'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      {/* <IndexRoute component={Search} /> */}
      <Route path='/search' component={Search} />

      <Route path='/favorites' component={Favorites} />

    </Route>
  </Router>,
  document.getElementById('root')
);
