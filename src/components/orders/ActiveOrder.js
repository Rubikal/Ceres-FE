import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoActiveOrder from './NoActiveOrder';
import { getOrders } from '../../store/action-creators/orders';
import ActiveOrders from './ActiveOrders';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

// the index page (active order/ no active order)
export class ActiveOrder extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.getOrders();
  }

  renderActiveOrders() {
    const { activeOrders } = this.props;

    if (activeOrders.length) {
      return <ActiveOrders orders={activeOrders} />
    } else {
      return <NoActiveOrder />
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
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
  activeOrders: state.getIn(['orders', 'userOrders', 'activeOrders'])
});

const mapDispatchToProps = {
  getOrders
}

const connectedActiveOrder =  connect(mapStateToProps, mapDispatchToProps)(ActiveOrder)

export default withStyles(styles)(connectedActiveOrder);
