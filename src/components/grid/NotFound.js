import React, { Component } from 'react';
import { Ghost } from 'react-kawaii';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>Page not found!</h2>
        <Ghost size={240} mood="sad" color="#E0E4E8" />
      </div>
    )
  }
}
