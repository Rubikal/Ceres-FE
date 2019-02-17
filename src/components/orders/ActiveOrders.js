import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Order from './Order';

export default class ActiveOrders extends Component {

  renderOrders = () => {
    const { orders } = this.props;
    return orders.map(order => <Order key={order.orderId} order={order} />);
  }
  render() {
    return (
      <Grid container lg={12}>
        { this.renderOrders() }
      </Grid>
    )
  }
}
