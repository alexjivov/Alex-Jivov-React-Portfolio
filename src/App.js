import React, { Component } from 'react';

// REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
import { Link } from 'react-router-dom';

//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////


import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './Components/main';
import Contact from './Components/pages/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '300px', position: 'relative'}}>
          <Layout fixedHeader>
            <Header className ="header-color" title={<Link style={{textDecoration:'none',color:'white',marginLeft:'-50px',}} to="/">Alexander Jivov</Link>} scroll>
              <Navigation >
                <Link className="nav-links"  style={{fontSize:'18px', textDecoration:'none'}} to="/">Home</Link>
                <Link className="nav-links" style={{fontSize:'18px', textDecoration:'none'}} to="/resume">Resume</Link>
                <Link className="nav-links" style={{fontSize:'18px', textDecoration:'none'}} to="/portfolio">Portfolio</Link>
                <Link className="nav-links" style={{fontSize:'18px', textDecoration:'none'}} to="/contact">Contact</Link>
              </Navigation>
            </Header>
            
            <Content />

          </Layout>
          <Main />
    
        </div>
     
      </div>
    );
  }
}



export default App;
