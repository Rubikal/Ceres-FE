import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActiveOrder from './components/orders/ActiveOrder';
import CreateOrder from './components/orders/CreateOrder';
import Login from './components/users/Login';

class App extends Component {
  render() {
    return (
       <Router>
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

          <Route path="/" exact component={ActiveOrder} />
          <Route path="/login" exact component={Login} />
          <Route path="/create-order/" component={CreateOrder} />
        </div>
      </Router>
    );
  }
}

export default App;
