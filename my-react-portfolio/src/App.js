import React, { Component } from 'react';



//import minified CSS
import './Assets/css/default.min.css';

/////////////////
////COMPONENTS////
/////////////////

// import header component
import Header from './Components/headerComponent/header';
import Homepage from './Components/pages/homepage';
import Biobox from './Components/boxComponents/biobox';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Homepage />
        <Biobox />
      </div>
    );
  }
}



export default App;
