import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import Avatar from '@material-ui/core/Avatar';
import Restaurant from '@material-ui/icons/Restaurant';
import Archive from '@material-ui/icons/Archive';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import NightMode from '@material-ui/icons/Brightness2';
import Switch from '@material-ui/core/Switch';
import { getLocalStorage, setLocalStorage } from '../../helpers/cache';
import { setNightMode } from '../../store/action-creators/ui';

const styles = {
  list: {
    width: 250,
  },
  bigAvatar: {
    marginLeft: 50,
    width: 100,
    height: 100,
  },
};

class PlainSidebar extends React.Component {

  state = {
    nightMode: JSON.parse(getLocalStorage('nightMode'))
  }

  handleNightModeChange = () => {
    const { setNightMode, nightMode } = this.props;
    setNightMode(!nightMode);
  }

  render() {
    const { classes } = this.props;
    const {
      loginState,
      avatar,
      userName,
      wallet,
      isAdmin,
      nightMode
    } = this.props;

    const sideList = (
      <div className={classes.list}>
          <ListItem button>
            <AccountBalanceWallet />
            <ListItemText primary={`${wallet} EGP`} />
          </ListItem>
          <ListItem button>
            <Restaurant />
            <ListItemText primary="Active Orders" />
          </ListItem>
          <ListItem button>
            <Archive />
            <ListItemText primary="Old Orders" />
          </ListItem>
          {
            isAdmin &&
            <ListItem button>
              <SupervisorAccount />
              <ListItemText primary="Manage Employees" />
            </ListItem>
          }
      </div>
    );

    return ( 
        <SwipeableDrawer
          open={this.props.left && loginState === 'loggedIn'}
          onClose={this.props.toggleDrawer('left', false)}
          onOpen={this.props.toggleDrawer('left', true)}
        >
          <List>
            <ListItem>
              <Avatar alt={userName} src={avatar} className={classes.bigAvatar} />
            </ListItem>
            <ListItem>
              <ListItemText inset primary={userName} />
            </ListItem>
          <Divider />
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer('left', false)}
            onKeyDown={this.props.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
          <ListItem>
            <NightMode />
            <ListItemText primary="Night Mode" />
            <Switch
              checked={nightMode}
              onChange={this.handleNightModeChange}
              value="nightMode"
              color="primary"
            />
          </ListItem>
          </List>
        </SwipeableDrawer>
    );
  }
}

PlainSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loginState: state.getIn(['users', 'loginState']),
  avatar: state.getIn(['users', 'userInfo', 'avatar']),
  userName: state.getIn(['users', 'userInfo', 'name']),
  wallet: state.getIn(['users', 'userInfo', 'wallet']),
  isAdmin: state.getIn(['users', 'userInfo', 'isAdmin']),
  nightMode: state.getIn(['ui', 'sidebar', 'nightMode'])
});

const mapDispatchToProps = {
  setNightMode
};

const Sidebar = withStyles(styles)(PlainSidebar);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
