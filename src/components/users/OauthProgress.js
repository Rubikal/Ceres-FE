import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { updateLoginState } from '../../store/action-creators/users';

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
  }

  render() {
    return (
      <div>
        <h3>Signing in using Slack!</h3>
        <CircularProgress className={this.props.classes.progress} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    updateLoginState
}

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(OauthProgress);
export default withStyles(styles)(reduxConnected);
