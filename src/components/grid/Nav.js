import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './../../logo.svg';
import Sidebar from './Sidebar';
import { Detector } from 'react-detect-offline';

import RenderLoginState from '../users/RenderLoginState';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  },
});

class UnstyledNav extends Component {

   state = {
     left: false,
   };

   toggleDrawer = (side, open) => () => {
     this.setState({
       [side]: open,
     });
   };

  render() {
    const { classes, loginState } = this.props;
    return (
      <div className={classes.root}>
        <Detector
          render={({ online }) => online ? '' :
            <div className="offline_warning">
              <Typography variant="h6">
                You are offline!
              </Typography>
            </div>
          }
        />
        <AppBar position="static">
          <Toolbar>
            {
              loginState === 'loggedIn' &&
              <IconButton 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu"
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/" style={styles.linkStyles}>
              <img src={Logo} className="App-logo" alt="logo" />
              </Link>
            </Typography>
            <RenderLoginState />
          </Toolbar>
        </AppBar>
        <Sidebar left={this.state.left} toggleDrawer={this.toggleDrawer} />
      </div>
    )
  }
}

UnstyledNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loginState: state.getIn(['users', 'loginState']),
});

const mapDispatchToProps = {
};

const Nav = withStyles(styles)(UnstyledNav);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
