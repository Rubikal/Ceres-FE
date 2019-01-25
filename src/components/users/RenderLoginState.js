import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  },
   bigAvatar: {
     margin: 10,
     width: 60,
     height: 60,
   },
};

class RenderLoginState extends Component {
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
        <IconButton color="inherit">
          <Avatar alt={userName} src={avatar} className={styles.bigAvatar} />
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
  render() {
    return (
      <div>
          {this.renderLoginState()}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderLoginState);
