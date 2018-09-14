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
  
  <div className="projects-grid">
  <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
  </Tabs>
  <br />
  <div className="cards-grid">


  {/*Project 1*/}
  <Card shadow={5} style ={{minWidth: '450'}}>
    <CardTitle style={{color: '#fff',height:'176px',background:'url(http://365.unsplash.com/assets/medium-372a217d5e05a28e08efc1cde0c0c9f5.jpg) center / cover'}}>Medium.com Clone</CardTitle>
    <CardText>
    A simple clone of the popular Medium.com website utilizing Reactjs, Redux, Nodejs, Cloudinary, MongoDB and Express.js. Handles secure user authentication through direct login and Google sign-in. 
    </CardText>
    <CardActions border>
      <Button colored>Github</Button>
      <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
  <br />


  {/*Project 2 */}
   <Card shadow={5} style ={{minWidth: '450'}}>
   <CardTitle style={{color: '#fff',height:'176px',background:'url(https://i.ytimg.com/vi/HZkN0LfC5dM/maxresdefault.jpg) center / cover'}}>React CRUD Application</CardTitle>
   <CardText>
   A frontend web app in React and a backend REST API server in Node. The frontend contains a home page and a posts manager, with the posts manager hidden behind secure user authentication.
   </CardText>
   <CardActions border>
     <Button colored>Github</Button>
     <Button colored>Live Demo</Button>
   </CardActions>
   <CardMenu style={{color: '#fff'}}>
     <IconButton name="share" />
   </CardMenu>
 </Card>


 {/*Project 3*/}
 <br />
  <Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://codingvideos.net/wp-content/uploads/2018/06/1528824662_maxresdefault.jpg) center / cover'}}>React Weather</CardTitle>
  <CardText>
  
Utilized the create-react-app platform and pulled from a weather API to build a replica of the weather app found pre-installed on iOS devices. 
  </CardText>
  <CardActions border>
    <Button colored>Github</Button>
    <Button colored>Live Demo</Button>
  </CardActions>
  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>

</div>
</div>
)
} else if(this.state.activeTab === 1) {
  return(
    <div> 
  <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
  </Tabs>
  <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 1</CardTitle>
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
<br />


{/*Project 2 */}
 <Card shadow={5} style ={{minWidth: '450'}}>
 <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 2</CardTitle>
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


{/*Project 3*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 3</CardTitle>
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

{/*Project 4*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 4</CardTitle>
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
</div>
  </div>
  )

}else if(this.state.activeTab === 2) {
  return(
    <div> 
<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
<Tab>React</Tab>
<Tab>JavaScript</Tab>
 <Tab>NodeJS</Tab>
<Tab>MongoDB</Tab>
  </Tabs>
  <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 1</CardTitle>
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
<br />


{/*Project 2 */}
 <Card shadow={5} style ={{minWidth: '450'}}>
 <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 2</CardTitle>
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


{/*Project 3*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 3</CardTitle>
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

{/*Project 4*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 4</CardTitle>
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
</div>
</div>
  )
  } else if(this.state.activeTab === 3) {
    
    return(
      <div> 
  {<Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
  <Tab>React</Tab>
  <Tab>JavaScript</Tab>
  <Tab>NodeJS</Tab>
  <Tab>MongoDB</Tab>
    </Tabs>}
    <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 1</CardTitle>
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
<br />


{/*Project 2 */}
 <Card shadow={5} style ={{minWidth: '450'}}>
 <CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 2</CardTitle>
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


{/*Project 3*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 3</CardTitle>
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

{/*Project 4*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png center / cover'}}>React Project 4</CardTitle>
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
</div>
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
    
      <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid> 

    </div>
    );
  }
}

export default Portfolio;