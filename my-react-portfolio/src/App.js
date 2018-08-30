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
            <Header title={<span><span style={{ color: '#ddd' }}> </span><strong></strong></span>}>
              <Navigation>
                <Link href="/">About Me</Link>
                <Link href="/">Resume</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link href="/">About Me</Link>
                <Link href="/">Resume</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Contact</Link>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
        <Main />
      </div>
    );
  }
}



export default App;
