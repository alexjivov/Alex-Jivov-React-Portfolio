import React, { Component } from 'react';
//importing react-mdl components (i.e. Grid)
import {Grid,Cell} from 'react-mdl';


// components
// have to rename component in here and at export - must start with a capital
class Portfolio extends Component {
  render() {
    return (
     <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}></Cell>

        </Grid>
    </div>
    );
  }
}

export default Portfolio;