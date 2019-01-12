import React, { Component } from 'react';
import { Mug } from 'react-kawaii';
import yellow from '@material-ui/core/colors/yellow';

export default class NoActiveOrder extends Component {
  render() {
    return (
      <div>
        <h2>You don't have any active orders!</h2>
        <Mug size={170} mood="shocked" color={yellow.A700} />
      </div>
    )
  }
}
