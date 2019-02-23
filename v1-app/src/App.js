import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customer from './pages/Customer/Customer';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
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
