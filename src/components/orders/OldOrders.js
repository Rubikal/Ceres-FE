import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoOldOrder from './NoOldOrder';
import { getOldOrders } from '../../store/action-creators/orders';
import ActiveOrders from './ActiveOrders';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  },
  heading: {
    marginTop: 30
  }
});

// the index page (active order/ no active order)
export class OldOrders extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.getOldOrders();
  }

  renderActiveOrders() {
    const { oldOrders } = this.props;

    if (oldOrders.length) {
      return <ActiveOrders orders={oldOrders} />
    } else {
      return <NoOldOrder />
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h4" className={classes.heading}>
          Old Orders
        </Typography>
        { 
          this.renderActiveOrders()
        }
        <Link to="/new-order/" className={classes.linkStyles}>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  oldOrders: state.getIn(['orders', 'userOrders', 'oldOrders'])
});

const mapDispatchToProps = {
  getOldOrders
}

const connectedOldOrder =  connect(mapStateToProps, mapDispatchToProps)(OldOrders)

export default withStyles(styles)(connectedOldOrder);
