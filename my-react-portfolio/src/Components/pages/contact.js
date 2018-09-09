import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
// Import grid system from react-mdl
import { Grid, Cell } from 'react-mdl';
// components
// have to rename component in here and at export - must start with a capital
class Contact extends Component {
  render() {
    return (
     <div className = "contact-body">
      <Grid className ="contact-grid">
        <Cell col={6}>half</Cell>
        <Cell col={6}>half</Cell>
      </Grid>
      
    </div>
    );
  }
}

export default Contact;