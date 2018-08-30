import React, { Component } from 'react';
// Removed CSS because it is already included in App.js

//Imports JUST the link for use
// In React, you do not need anchor tags because they are single page applications
// Use <Link /> instead of <a> 
// import {
//     Link
    
//   } from 'react-router-dom';

// components
// have to rename component in here and at export - must start with a capital
class OngoingProjects extends Component {
  render() {
    return (
        <div class="current-projects">
            <h1 class="cp-headline">What I'm Working On</h1>
            
            <a class="project-button" href="" alt="" target="_blank"></a>
           
            <a class="project-button" href="" alt="" target="_blank"></a>
        </div>
   
    );
  }
}

export default OngoingProjects;
