import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Customer from './components/Customer';
import Admin from './components/Admin';
import Home from './components/Home';
import './App.css';

import itemReducer from './store/reducers/item'
const initialState = {
  selectedRepositoryIds: [],
};
const store = createStore(itemReducer, initialState);


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
        <Provider store={store}>
          <div className="full-container">
            {routes}
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
