import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Your active order</Link>
            </li>
            <li>
              <Link to="/create-order/">Create new order</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
