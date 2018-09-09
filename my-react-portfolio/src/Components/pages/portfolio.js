import React, { Component } from 'react';
//importing react-mdl components (i.e. Grid)
import {Tabs, Tab} from 'react-mdl';

// components
// have to rename component in here and at export - must start with a capital
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }
toggleCategories(){
  if (this.state.activeTab === 0) {
return (
  <div> <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
  </Tabs></div>
)
     
  }
}
  
  render() {
    return (
     <div className="category-tabs">
      <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>JavaScript</Tab>
      <Tab>NodeJS</Tab>
      <Tab>MongoDB</Tab>
      </Tabs>
      <section className="projects-grid">
        {this.toggleCategories()}
      </section>
    </div>
    );
  }
}

export default Portfolio;