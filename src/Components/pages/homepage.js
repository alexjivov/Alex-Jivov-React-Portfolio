import React, { Component } from 'react';
// Removed CSS because it is already included in App.js
import { Grid, Cell } from 'react-mdl';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Homepage extends Component {

//AOS - Need to mount AOS BEFORE render in the below function to make it work
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      
    }
    render() {
        return (
        
            <div  style={{ width: '100%', margin: 'auto' }}>
                <Grid  className="landing-grid">
                    <Cell col={12}>
                    
                    <div  data-aos="fade-right" className="banner-text">
                        <h1> Alexander Jivov </h1>
                        <h1>Full Stack Web Developer</h1>

                        <hr />
                    <p>HTML/CSS | React | React Native | Sass | NodeJS | GulpJS | Express </p>

                    <div className="social-links">
                    {/* Linkedin Icon*/}
                    <a href="https://www.linkedin.com/in/alexander-jivov-a2959682/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                    {/* Github Icon*/}
                    <a href="https://github.com/alexjivov" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>
                    {/* Instagram Icon*/}
                    <a href="https://www.instagram.com/bigbelly6ix/?hl=en" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram"  aria-hidden="true" />
                        </a>
                    {/* Twitter Icon*/}
                    <a href="https://twitter.com/alexanderjivov" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-twitter-square"  aria-hidden="true" />
                        </a>
                    
                    </div>
                    
                    </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Homepage;
