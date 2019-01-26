import React, { Component } from 'react';
import { IceCream } from 'react-kawaii';
import yellow from '@material-ui/core/colors/yellow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  kawaii: {
    paddingTop: theme.spacing.unit * 4,
  }
});

class NoActiveOrder extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={0}>
          <Typography variant="h5" component="h3">
           You don't have any active orders!
          </Typography>
          <div className={classes.kawaii}>
            <IceCream size={270} mood="shocked" color={yellow.A700} />
          </div>
        </Paper>
      </div>
    );
  }
}

NoActiveOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoActiveOrder);