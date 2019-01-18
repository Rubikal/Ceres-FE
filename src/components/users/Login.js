import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Login extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <h2>Login using your Rubikal Slack</h2>
        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=2991068424.474607458869"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;