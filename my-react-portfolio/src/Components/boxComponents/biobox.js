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
class Biobox extends Component {
  render() {
    return (
        <aside class="bio">
        <h1 class="about-headline">About Me</h1>
        <p class="bio-content">Born and raised in Toronto, Canada, I originally began my career in politics and journalism. Attending George
            Washington University in Washington, DC, I quickly saw how developing technologies on the web, and especially
            their design, would have a critical impact on how consumers engaged with their content and businesses. </p>

        <p class="bio-content">I began my coding career at the University of Toronto, where I enrolled in an intensive, six-month Coding BootCamp
            for aspiring front-end and full-stack developers. Through the bootcamp and self-teaching, I have become proficient
            in: </p>
        <ul class="bio-content">
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap and Related CSS Frameworks</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
        </ul>
        <p class="bio-content">With my experience in politics, marketing, sales, and journalism, I approach web design from a unique perspective.
            I am always utilizing my experience to design websites and applications that will ensure maximum consumer
            engagement and return. </p>
        <p class="bio-content">Find me on Github at <a href="https://github.com/alexjivov" alt="Alex Jivov GitHub">https://github.com/alexjivov</a></p>
    </aside>
    );
  }
}

export default Biobox;
