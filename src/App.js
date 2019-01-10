import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { configureStore } from './store/configureStore';
import './App.scss';
import routes from './router/routes';
import FancyRoute from './router/FancyRoute';
import Nav from './components/grid/Nav';

const environment = 'development';

function addReduxStore({ Component, environment }) {
    const store = configureStore({ environment });
    return (
        <Provider store={store}>
            {Component}
        </Provider>
    );
}

class App extends Component {
  render() {
    return (
      addReduxStore({ Component: <Router>
        <div className="App">
          <Nav />
          <Switch>
            {routes.map((route, i) =>
              <FancyRoute key={i} {...route} />
            )}
          </Switch>
        </div>
      </Router>,
      environment
      }));
  }
}

export default App;
