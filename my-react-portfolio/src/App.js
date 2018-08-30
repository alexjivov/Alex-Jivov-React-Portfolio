import React, { Component } from 'react';

// REACT ROUTER - Allows navigation of different webpages - npm react-router-dom



//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////


import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Homepage from './Components/pages/homepage';
import Main from './Components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}> </span><strong></strong></span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
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
