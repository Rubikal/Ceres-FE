import React, { Component } from 'react';
import { Mug } from 'react-kawaii';

export default class NoActiveOrder extends Component {
  render() {
    return (
      <div>
        <h2>You don't have any active orders!</h2>
        <Mug size={170} mood="shocked" color="#A6E191" />
      </div>
    )
  }
}
