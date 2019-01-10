import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './App.scss';
import routes from './router/routes';
import FancyRoute from './router/FancyRoute';
import Nav from './components/grid/Nav';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
