import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { logoutUser } from '../../store/action-creators/users';

const styles = {
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  }
};

class RenderLoginState extends Component {
  state = {
    anchorEl: null
  };
  

  renderLoginState = () => {
    const {
      loginState,
      avatar,
      userName
    } = this.props;

    if (loginState === 'inProgress') {
      return (
        <Button color="inherit" disabled>
          <CircularProgress size={24} color="secondary" />
        </Button>
      );
    } else if(loginState === 'loggedIn') {
      return (
          <IconButton 
            onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt={userName} src={avatar} />
          </IconButton>
      );
    }
    else {
      return (
        <Link to="/login/" style={styles.linkStyles}>
          <Button color="inherit">
            Login
          </Button>
        </Link>
      );
    }
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    this.handleMenuClose();
    this.props.logoutUser();
  }
  
  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.logout}>Logout</MenuItem>
      </Menu>
    );

    return (
      <div>
          {this.renderLoginState()}
          {renderMenu}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loginState: state.getIn(['users', 'loginState']),
    avatar: state.getIn(['users', 'userInfo', 'avatar']),
    userName: state.getIn(['users', 'userInfo', 'name']),
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderLoginState);
