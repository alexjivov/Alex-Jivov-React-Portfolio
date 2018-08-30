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
import OngoingProjects from './Components/boxComponents/ongoingprojects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Homepage />
        <Biobox />
        <OngoingProjects />
      </div>
    );
  }
}



export default App;
