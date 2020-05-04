import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import ProtectedPage from './privat';
import About from './about';
export default function Home() {
    let {path, url}= useRouteMatch();
    return (
     
            <Router>
          <h1>Home Welcome</h1>
          <ul>
            <li>
              <Link to={`${url}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/priva`}>Private</Link>
            </li>
          </ul>
        <Switch>
          <Route exact path={`${path}/`} component={About}/>
          <Route path={`${path}/priva`} component={ProtectedPage}/>
        </Switch>
        </Router>
       
    )
}
