import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import Home from './components/Home';

class App extends Component {
  
  render() {
    let routes = (
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>

    )
    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

export default App;
