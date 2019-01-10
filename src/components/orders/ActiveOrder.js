import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoActiveOrder from './NoActiveOrder';

export class ActiveOrder extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <NoActiveOrder />
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrder)

export default ActiveOrder;
