import React, { Component } from 'react';
import { IceCream } from 'react-kawaii';
import yellow from '@material-ui/core/colors/yellow';

export default class NoActiveOrder extends Component {
  render() {
    return (
      <div>
        <h2>You don't have any active orders!</h2>
        <IceCream size={270} mood="shocked" color={yellow.A700} />
      </div>
    )
  }
}
