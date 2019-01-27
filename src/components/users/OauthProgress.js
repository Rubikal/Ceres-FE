import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { updateLoginState, loginUser } from '../../store/action-creators/users';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export class OauthProgress extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.updateLoginState({state: 'inProgress'});
    this.props.loginUser();
  }

  render() {
    return (
      <div>
        <Typography variant="h5" component="h3" style={{marginBottom: 30, marginTop: 50}}>
          Signing in using Slack!
        </Typography>
        <CircularProgress className={this.props.classes.progress} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    updateLoginState,
    loginUser
};

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(OauthProgress);
export default withStyles(styles)(reduxConnected);
