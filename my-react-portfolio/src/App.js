import React, { Component } from 'react';

// REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
import {
  BrowserRouter as Router,
  Route, 
  Link
  
} from 'react-router-dom';


//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////

import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background:  'url("./src/Assets/Img/Portfolio copy 2.png") center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        
      </div>
    );
  }
}



export default App;
