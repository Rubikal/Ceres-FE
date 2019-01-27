import React, { Component } from 'react';
import {
  Switch
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore, { history } from './store/configureStore';
import './App.scss';
import routes from './router/routes';
import FancyRoute from './router/FancyRoute';
import Nav from './components/grid/Nav';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { darkTheme } from './components/grid/darkTheme';
import { lightTheme } from './components/grid/lightTheme';
import { getLocalStorage } from './helpers/cache';


// We should create a globals scope to place this variable
const environment = 'development';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const theme = JSON.parse(getLocalStorage('nightMode')) ?
  darkTheme :
  lightTheme;

class App extends Component {
  render() {
    const store = configureStore({ environment });
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={createMuiTheme(theme)}>
            <CssBaseline />
            <div className={classes.root}>
              <Nav />
              <div className="App">
              <Switch>
                {routes.map((route, i) =>
                  <FancyRoute key={i} {...route} />
                )}
              </Switch>
              </div>
            </div>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
