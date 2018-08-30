import React, { Component } from 'react';
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
                    <img
                        src="https://www.shareicon.net/download/2017/05/09/885769_user_512x512.png" alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr />
                    <p>HTML/CSS | React | React Native | Sass | NodeJS | GulpJS | Express </p>

                    <div className="social-links">
                    {/* Linkedin Icon*/}
                    <a href="http://google.ca" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                    {/* Github Icon*/}
                    <a href="http://google.ca" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-github-square"  aria-hidden="true" />
                    {/* InstagramIcon*/}
                    <a href="http://google.ca" rel="noopener noreferrer" target="_blank"></a>
                        <i className="fa fa-instagram"  aria-hidden="true" />
                    </div>
                   
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Homepage;
