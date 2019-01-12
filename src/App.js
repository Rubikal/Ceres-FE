import React, { Component } from 'react';
import {
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
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
        <ConnectedRouter history={history}>
          <>
            <div className="App">
              <Nav />
              <Switch>
                {routes.map((route, i) =>
                  <FancyRoute key={i} {...route} />
                )}
              </Switch>
            </div>
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
