import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Restaurant from '@material-ui/icons/Restaurant';
import LinkIcon from '@material-ui/icons/Link';
import { formatOrderStatus } from '../../helpers/utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: '8px 10px 12px rgba(0,0,0,0.16), 8px 10px 12px rgba(0,0,0,0.17)'
  },
  collecting: {
    boxShadow: '8px 10px 12px rgba(0,255,0,0.16), 8px 10px 12px rgba(0,255,0,0.17) '
  },
  icon: {
    verticalAlign: 'middle'
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

  handleMenuClick = () => {
    const { order: { menuUrl: menu } } = this.props;
    window.location = menu;
  }

  render() {
    const { classes, order, view } = this.props;
    return (
      <Grid lg={3} className={classes.root}>
        <Card className={`${classes.card} ${order.status === 'collecting' && classes.collecting}`}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                     <Restaurant className={classes.icon} />
                     {' '}
                     { order.restaurant }
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Status: {formatOrderStatus(order.status)}</Typography>
                </Grid>
                {
                  order.menuUrl &&
                  <Grid item>
                    <Button color="secondary" onClick={this.handleMenuClick}>
                      Menu
                    </Button>
                  </Grid>
                }
                <Grid item>
                  {
                    !view &&
                    <Button onClick={this.handleViewOrder} variant="outlined" className={classes.button}>
                      View
                    </Button>
                  }
                  {
                    order.status === 'collecting' &&
                    <Button onClick={this.handleSubmitItems} variant="contained" color="primary" className={classes.button}>
                      Submit Your Order
                    </Button>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
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