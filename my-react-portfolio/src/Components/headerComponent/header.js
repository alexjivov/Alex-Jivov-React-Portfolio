import React, { Component } from 'react';
// Removed CSS because it is already included in App.js

//Imports JUST the link for use
// In React, you do not need anchor tags because they are single page applications
// Use <Link /> instead of <a> 
import {
    Link
    
  } from 'react-router-dom';

// components
// have to rename component in here and at export - must start with a capital
class Header extends Component {
  render() {
    return (
     <header>
        <div className="logo">
        LOGO
        </div>

        <nav>
            <ul>
                <li className="first">
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Products</Link>
                </li>
                <li className ="last">
            
                <Link to="/Contact">Contact</Link>
                </li>

            </ul>
        </nav>

    </header>
    );
  }
}

export default Header;
