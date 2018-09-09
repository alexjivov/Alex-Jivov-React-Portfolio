import React, { Component } from 'react';
//importing react-mdl components (i.e. Grid)
import {Tabs, Tab, Grid, Cell} from 'react-mdl';

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
  <div> 
  {<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
</Tabs>}
<h1>This is React</h1>
  </div>
)
} else if(this.state.activeTab === 1) {
  return(
    <h1>This is JavaScript</h1>
  )

}else if(this.state.activeTab === 2) {
  } else if(this.state.activeTab === 3) {
    return(
      <h1>This is NodeJS</h1>
    )
  }  else if(this.state.activeTab === 3) {
    return(
      <h1>This is MongoDB</h1>
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
      <Grid className="projects-grid">
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid> 
       
      </section>
    </div>
    );
  }
}

export default Portfolio;