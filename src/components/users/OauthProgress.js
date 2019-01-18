import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export class OauthProgress extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <h3>Singing in using Slack!</h3>
        <CircularProgress className={this.props.classes.progress} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(OauthProgress);
export default withStyles(styles)(reduxConnected);
