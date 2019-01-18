import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  }
};

class RenderLoginState extends Component {
  renderLoginState = () => {
    const {loginState} = this.props;
    if (loginState === 'inProgress') {
      return (
        <Button color="inherit" disabled>
          <CircularProgress size={24} color="secondary" />
        </Button>
      );
    }
    else {
      return (
        <Link to="/login/" style={styles.linkStyles}>
          <Button color="inherit">
            Login
          </Button>
        </Link>
      );
    }
  }
  render() {
    return (
      <div>
          {this.renderLoginState()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loginState: state.getIn(['users', 'loginState'])
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderLoginState);
