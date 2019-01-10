import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ActiveOrder extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <span>Active Order 🥪</span>
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
