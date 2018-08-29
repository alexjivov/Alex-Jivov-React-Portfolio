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
class Header extends Component {
  render() {
    return (
     <header>
         <h1 class="banner">Alexander Jivov</h1><span></span><h2>- Full Stack Developer -</h2>

        <nav>
            <ul>
                <li className="first">
                <p>Home</p>
                </li>
                <li>
                    <p>Resume</p>
                </li>
                <li>
                    <p>Portfolio</p>
                </li>
                <li className ="last">
                <p>Contact</p>
                </li>

            </ul>
        </nav>

    </header>
    );
  }
}

export default Header;
