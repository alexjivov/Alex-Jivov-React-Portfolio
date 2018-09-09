import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Removed CSS because it is already included in App.js
import { Grid, Cell } from 'react-mdl';

// components
// have to rename component in here and at export - must start with a capital
class Homepage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    
                    <div className="banner-text">
                        <h1> Alexander Jivov </h1>
                        <h1>Full Stack Web Developer</h1>

                        <hr />
                    <p>HTML/CSS | React | React Native | Sass | NodeJS | GulpJS | Express </p>

                    <div className="social-links">
                    {/* Linkedin Icon*/}
                    <Link to="https://www.linkedin.com/in/alexander-jivov-a2959682/" rel="noopener noreferrer" target="_blank"></Link>
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    {/* Github Icon*/}
                    <a href="https://github.com/alexjivov" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-github-square"  aria-hidden="true" />
                    {/* Instagram Icon*/}
                    <a href="https://www.instagram.com/bigbelly6ix/?hl=en" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-instagram"  aria-hidden="true" />
                    {/* Twitter Icon*/}
                    <a href="https://twitter.com/alexanderjivov" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-twitter-square"  aria-hidden="true" />
                    
                    </div>
                    
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Homepage;
