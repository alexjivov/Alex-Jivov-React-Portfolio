import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
import {Grid, Cell} from 'react-mdl';
// components
// have to rename component in here and at export - must start with a capital
class Resume extends Component {
  render() {
    return (
     <div>
        <Grid>
          <Cell col={4}>LeftSide</Cell>
          <Cell className="resume-right-col" col={8}>Right Side</Cell>

        </Grid>
    </div>
    );
  }
}

export default Resume;