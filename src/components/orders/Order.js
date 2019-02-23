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
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
// import Restaurant from '@material-ui/icons/Restaurant';
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
    minHeight: 220,
    minWidth: 220,
    position: 'relative',
    borderRadius: '20px 20px 20px 20px',
    background: theme.gradient.primary
  },
  collecting: {
    background: theme.gradient.secondary
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: '1.3em'
  },
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    // margin: theme.spacing.unit,
    fontWeight: 'bold',
    borderTopRightRadius: 'none',
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },
  chipPosition: {
    position: 'absolute',
    right: -30,
    top: -15,
    // zIndex: 10
  },
  restaurantName: {
    // position: 'relative',
    // zIndex: 20
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 5,
    borderRadius: '7px 7px 7px 7px',
    marginLeft: 50,
    marginRight: 50
  }
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
              <div className={classes.chipPosition}>
                  <Chip
                    label={formatOrderStatus(order.status)}
                    className={classes.chip}
                    color = {
                      `${order.status === 'collecting' ? 'primary' : order.status === 'settled' || order.status === 'cancelled' ? 'default': 'secondary'}`
                    }
                  />
                </div>
                <Grid item xs>
                  <Typography className={classes.restaurantName} gutterBottom variant="h4">
                     { order.restaurant }
                  </Typography>
                  <Divider className={classes.divider} variant="middle" />
                </Grid>
                {
                  order.menuUrl &&
                  <Grid item>
                    <Button 
                      color={`${order.status === 'collecting' ? 'primary' : 'default' }`} 
                      variant={`${order.status === 'collecting' ? 'contained' : 'outlined' }`} 
                      onClick={this.handleMenuClick}
                    >
                      Menu
                    </Button>
                  </Grid>
                }
                <Grid item>
                  {
                    !view &&
                    <Button 
                      onClick={this.handleViewOrder} 
                      color={`${order.status === 'collecting' ? 'primary' : 'default' }`} 
                      variant={`${order.status === 'collecting' ? 'contained' : 'outlined' }`} 
                      className={classes.button}
                    >
                      View
                    </Button>
                  }
                  {
                    order.status === 'collecting' &&
                    <Button 
                      onClick={this.handleSubmitItems} 
                      variant="contained" 
                      color="secondary" 
                      className={classes.button}
                    >
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