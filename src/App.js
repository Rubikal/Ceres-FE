import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Provider } from 'redux';
import { configureStore } from './store/configureStore';
import './App.scss';
import routes from './router/routes';
import FancyRoute from './router/FancyRoute';
import Nav from './components/grid/Nav';

// We should create a globals scope to place this variable
const environment = 'development';

class App extends Component {
  render() {
    const store = configureStore({ environment });

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              {routes.map((route, i) =>
                <FancyRoute key={i} {...route} />
              )}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
