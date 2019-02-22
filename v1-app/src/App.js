import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customer from './components/Customer';
import Admin from './components/Admin';
import Home from './components/Home';
import './App.css';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/customer" component={Customer} />
        <Route path="/admin" component={Admin} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>

    )
    return (
      <div className="full-container">
        {routes}
      </div>
    );
  }
}

export default App;
