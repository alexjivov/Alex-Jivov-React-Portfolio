import React, { Component } from 'react';
//importing react-mdl components (i.e. Grid)
import {Tabs, Tab} from 'react-mdl';

// components
// have to rename component in here and at export - must start with a capital
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 4};
  }

  render() {
    return (
     <div className="category-tabs">
      <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>JavaScript</Tab>
      <Tab>mySQL</Tab>
      <Tab>MongoDB</Tab>
      
      </Tabs>
    </div>
    );
  }
}

export default Portfolio;