import React, { Component } from 'react';

// REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
import { Link } from 'react-router-dom';

//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////


import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import Contact from './Components/pages/contact';
import Portfolio from './Components/pages/portfolio';
import Homepage from './Components/pages/homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout fixedHeader>
            <Header className ="header-color" title={<span><span style={{ color: '#ddd' }}> What I'm Working On</span><strong></strong></span>}>
              <Navigation>
                <Link to="/">- Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact -</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/aboutme">React.js Burger Builder</Link>
                <Link to="/resume">React.js iOS Weather Application</Link>
                <Link to="/portfolio">My eCommerce Site</Link>
              </Navigation>
            </Drawer>
            
            <Content />
            
          </Layout>
          <Main />
        </div>
     
      </div>
    );
  }
}



export default App;
