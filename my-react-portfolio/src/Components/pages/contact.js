import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
// Import grid system from react-mdl
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
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
              src={require('/Users/alexjivov 1/Documents/Personal Coding/Personal-Projects/Alex-Jivov-React-Portfolio/my-react-portfolio/src/Assets/Img/4016x5000px Headshot copy 2.png')}
              alt="avatar"
              style={{ height: '250px',border:'3px solid #0F2027',borderRadius:'10%' }}

            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (647)-624-4362
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    jivovalexander@gmail.com
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    alexjivov@gwu.edu
                  </ListItemContent>
                </ListItem>
              </List>

            </div>

          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Contact;