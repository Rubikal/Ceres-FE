import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 700,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Order extends Component {

  handleViewOrder = () => {
    const { order: { orderId }, push } = this.props;
    push(`/orders/${orderId}`);
  }

  handleSubmitItems = () => {
    const { order: { orderId }, push } = this.props;
    push(`/orders/${orderId}/submit-items`);
  }

  render() {
    const { classes, order, view } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Restaurant: { order.restaurant }
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Status: {order.status}</Typography>
                </Grid>
                <Grid item>
                  <Typography>Menu: <a target="_blank" href={order.menuUrl}>{order.menuUrl}</a></Typography>
                </Grid>
                <Grid item>
                  {
                    !view &&
                    <Button onClick={this.handleViewOrder} variant="contained" color="primary" className={classes.button}>
                      View
                    </Button>
                  }
                  {
                    order.status === 'collecting' &&
                    <Button onClick={this.handleSubmitItems} variant="contained" color="secondary" className={classes.button}>
                      Submit Your Order
                    </Button>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Order.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  push
};

const connectedOrder = connect(null, mapDispatchToProps)(Order);
export default withStyles(styles)(connectedOrder);