import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

export class ViewWallet extends Component {
  static propTypes = {
  }

  render() {
    const { wallet, personalDeposit, allowance } = this.props;

    return (
      <div>
        <Typography variant="h4" component="h2" style={{marginBottom: 30, marginTop: 50}}>
          Your Wallet
        </Typography>
        <Typography variant="h5" component="h3" style={{marginBottom: 10, marginTop: 20}}>
          Total Balance: ({wallet}) EGP
        </Typography>
        <Typography variant="h5" component="h3" style={{marginBottom: 10, marginTop: 20}}>
          Rubikal Allowance: ({allowance}) EGP
        </Typography>
        <Typography variant="h5" component="h3" style={{marginBottom: 10, marginTop: 20}}>
          Personal Deposit: ({personalDeposit}) EGP
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wallet: state.getIn(['users', 'userInfo', 'wallet', 'wallet']),
  personalDeposit: state.getIn(['users', 'userInfo', 'wallet', 'personalDeposit']),
  allowance: state.getIn(['users', 'userInfo', 'wallet', 'allowance']),
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewWallet);
