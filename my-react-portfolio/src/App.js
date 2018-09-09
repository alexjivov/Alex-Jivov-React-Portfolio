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


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout fixedHeader>
            <Header className ="header-color" title={<Link style={{textDecoration:'none',color:'white',marginLeft:'-50px'}} to="/">Home</Link>} scroll>
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact -</Link>
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
