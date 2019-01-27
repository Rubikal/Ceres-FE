import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

export class Login extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <Typography variant="h5" component="h3" style={{marginBottom: 30, marginTop: 50}}>
          Login using your Rubikal Slack
        </Typography>
        <a href="https://slack.com/oauth/authorize?scope=identity.basic%2Cidentity.email%2Cidentity.team%2Cidentity.avatar&client_id=2991068424.474607458869"><img src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
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