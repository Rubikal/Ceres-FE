import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';

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

  render() {
    const { classes } = this.props;
    const {
      loginState,
      avatar,
      userName
    } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Divider />
      </div>
    );

    return ( 
        <SwipeableDrawer
          open={this.props.left}
          onClose={this.props.toggleDrawer('left', false)}
          onOpen={this.props.toggleDrawer('left', true)}
        >
          <List>
            <ListItem>
              <Avatar alt={userName} src={avatar} className={classes.bigAvatar} />
            </ListItem>
          </List>
          <Divider />
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer('left', false)}
            onKeyDown={this.props.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
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
});

const mapDispatchToProps = {

};

const Sidebar = withStyles(styles)(PlainSidebar);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
