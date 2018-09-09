import React, { Component } from 'react';
//importing react-mdl components (i.e. Grid)
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

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
  <Card shadow={5} style ={{minWidth: '450', margin:'auto'}}>
    <CardTitle style={{color: '#fff',height:'176px',background:'url(data:image/png;base64,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) center / cover'}}>React Project 1</CardTitle>
    <CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </CardText>
    <CardActions border>
      <Button colored>Github</Button>
      <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <IconButton name="share" />
    </CardMenu>
  </Card>

)
} else if(this.state.activeTab === 1) {
  return(
    <div> 
  {/*<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
  </Tabs>*/}
<h1>This is JavaScript</h1>
  </div>
  )

}else if(this.state.activeTab === 2) {
  return(
    <div> 
{/*<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
<Tab>React</Tab>
<Tab>JavaScript</Tab>
<Tab>NodeJS</Tab>
<Tab>MongoDB</Tab>
  </Tabs>*/}
<h1>This is NodeJS</h1>
</div>
  )
  } else if(this.state.activeTab === 3) {
    
    return(
      <div> 
  {/*<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
    </Tabs>*/}
<h1>This is MongoDB</h1>
  </div>
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