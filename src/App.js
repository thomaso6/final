import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Home from './Home-text.js';
import Images from './Images.js';
import Feed from './Feed.js';

export default function App(){
  return(
    <Router>
      <div id="home-text">
        <ul>
          <li>
            <Link to="/" id="link">Home&nbsp;&nbsp;</Link>
          </li>
          <li>
            <Link to="/images" id="link">Images&nbsp;&nbsp;</Link>
          </li>
          <li>
            <Link to="/feed" id="link">Forum</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/feed'>
            <Feed posts={Feed} />
          </Route>
          <Route path='/images'>
            <Images />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


