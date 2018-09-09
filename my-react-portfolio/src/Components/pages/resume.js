import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
import {Grid, Cell} from 'react-mdl';


/////////////////
////COMPONENTS////
/////////////////
import Education from './education';


// have to rename component in here and at export - must start with a capital
class Resume extends Component {
  render() {
    return (
     <div>
        <Grid style={{paddingTop:'100px'}}>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img 
              src="https://www.shareicon.net/download/2017/05/09/885769_user_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
            />
            </div>
            <h2 style={{paddingTop:'2em'}}>Alexander Jivov</h2>
            <h4 style={{color:'grey'}}>Full-Stack Developer</h4>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
            <h5>Address</h5>
            <p>68 Yorkville Avenue</p>
            <h5>Phone</h5>
            <p>(647)-624-4362</p>
            <h5>Email</h5>
            <p>jivovalexander@gmail.com</p>
            <h5>Web</h5>
            <p>My Website Goes Here</p>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

          </Cell>
          <Cell className="resume-right-col" col={8}>

            <Education />

            
          
          
          </Cell>

        </Grid>
    </div>
    );
  }
}

export default Resume;