import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


import Customer from './pages/Customer/Customer';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import './App.css';




const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});
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

      <ApolloProvider client={client}>
          <div className="full-container">
            {routes}
          </div>
      </ApolloProvider>
    );
  }
}

export default App;
