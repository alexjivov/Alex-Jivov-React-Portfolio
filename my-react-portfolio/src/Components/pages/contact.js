import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
// Import grid system from react-mdl
import { Grid, Cell } from 'react-mdl';
// components
// have to rename component in here and at export - must start with a capital
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alexander Jivov</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}

            />
            <p style={{width:'75%', margin: 'auto',paddingTop:'1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </Cell>
          <Cell col={6}>half</Cell>
        </Grid>

      </div>
    );
  }
}

export default Contact;