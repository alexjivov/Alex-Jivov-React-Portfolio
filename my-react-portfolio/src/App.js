import React, { Component } from 'react';



//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////

import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import header component
// import Header from './Components/headerComponent/header';
// import Homepage from './Components/pages/homepage';
// import Biobox from './Components/boxComponents/biobox';
// import OngoingProjects from './Components/boxComponents/ongoingprojects';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
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
        
      </div>
    );
  }
}



export default App;
