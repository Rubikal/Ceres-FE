import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Ghost } from 'react-kawaii';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Typography variant="h4" component="h2" style={{marginBottom: 30, marginTop: 50}}>
          Page not found!
        </Typography>
        <Ghost size={240} mood="sad" color="#E0E4E8" />
      </>
    )
  }
}
