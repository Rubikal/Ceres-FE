import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoActiveOrder from './NoActiveOrder';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  linkStyles: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

// the index page (active order/ no active order)
export class ActiveOrder extends Component {
  static propTypes = {
    prop: PropTypes,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <Link to="/create-order/" className={classes.linkStyles}><AddIcon /></Link>
        </Fab>
        <NoActiveOrder />
      </>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrder)

export default withStyles(styles)(ActiveOrder);
