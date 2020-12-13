import * as React from 'react'
import App from '../App'
import {Route, HashRouter, Switch} from 'react-router-dom'

export default class AppRouter extends React.Component{
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </HashRouter> 
    );
  }
} 