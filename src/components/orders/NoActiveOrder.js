import React, { Component } from 'react';
import { IceCream } from 'react-kawaii';
import yellow from '@material-ui/core/colors/yellow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  kawaii: {
    paddingTop: theme.spacing.unit * 4,
  },
  link: {
    color: theme.typography.h1.color,
    textDecoration: 'none'
  }
});

class NoActiveOrder extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root} elevation={0}>
          <Typography variant="h5" component="h3">
           Rubikal doesn't have any active orders!
          </Typography>
          <Typography variant="h6" component="h3">
           Try <Link className={classes.link} to="/new-order">creating a new one</Link>
          </Typography>
          <div className={classes.kawaii}>
            <IceCream size={270} mood="shocked" color={yellow.A700} />
          </div>
        </div>
      </div>
    );
  }
}

NoActiveOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoActiveOrder);