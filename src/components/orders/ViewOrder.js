import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getOrder } from '../../store/action-creators/orders';
import Order from './Order';

export class ViewOrder extends Component {
  static propTypes = {
  }

  componentWillMount() {
    const { orderId, getOrder } = this.props;
    getOrder(orderId);
  }

  render() {
    const { order } = this.props;
    return (
        order &&
        <Order order={this.props.order} view />
    )
  }
}

const mapStateToProps = (state) => ({
  orderId: state.getIn(['router', 'location', 'pathname']).split('/')[2],
  order: state.getIn(['orders', 'userOrders', 'selectedOrder'])
})

const mapDispatchToProps = {  
  getOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder)
