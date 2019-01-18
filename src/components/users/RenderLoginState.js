import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const styles = {
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  }
};

export class RenderLoginState extends Component {
  static propTypes = {
    loginState: PropTypes.string.isRequired
  }

  renderLoginState = () => {
    const {loginState} = this.props;
    if (loginState === 'inProgress') {
      return 'Loading';
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

const mapStateToProps = ({users}) => ({
    loginState: users.loginState
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderLoginState);
