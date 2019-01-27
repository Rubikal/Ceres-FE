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
import PropTypes from 'prop-types';
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

const theme = JSON.parse(getLocalStorage('nightMode')) ? darkTheme : lightTheme;

class App extends Component {

  static childContextTypes = {
    changeTheme: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      muiTheme: createMuiTheme(theme)
    };
  }

  getChildContext() {
    return {
      changeTheme: this.changeTheme
    };
  }

  changeTheme = nightMode => {
    if (nightMode) {
      this.setState({
        muiTheme: createMuiTheme(lightTheme)
      });
    } else {
      this.setState({
        muiTheme: createMuiTheme(darkTheme)
      });
    }
  };

  render() {
    const store = configureStore({ environment });
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={this.state.muiTheme}>
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
