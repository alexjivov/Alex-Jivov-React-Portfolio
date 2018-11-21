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
  {/* <Tab>MongoDB</Tab> */}
  </Tabs>
  <br />
  <div className="cards-grid">


  {/*Project 1*/}
  <Card shadow={5} style ={{minWidth: '450'}}>
    <CardTitle className="flex-track-bkg" style={{color: '#fff',height:'176px'}}></CardTitle>
    <CardText>
    <h5>FlexTrack OCR</h5>
    Utilizes Tesseract.js to allow employees to upload pictures of receipts and dynamically register expenses based on picture analysis. Front-end built using React with a MongoDB enabled back-end. 
    </CardText>
    <CardActions border>
      <Button href="https://github.com/alexjivov/FlexTrack-OCR-Full-Stack-Platform" colored>Github</Button>
      <Button href="https://desolate-shore-48838.herokuapp.com" colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
  <br />


  {/*Project 2 */}
   <Card shadow={5} style ={{minWidth: '450'}}>
   <CardTitle style={{color: '#fff',height:'176px',background:'url(https://i.ytimg.com/vi/HZkN0LfC5dM/maxresdefault.jpg) center / cover'}}></CardTitle>
   <CardText>
   <h5>React Crud Application</h5>
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
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://codingvideos.net/wp-content/uploads/2018/06/1528824662_maxresdefault.jpg) center / cover'}}></CardTitle>
  <CardText>
  <h5>React Weather</h5>
Utilized the create-react-app platform and pulled from a weather API to build a replica of the weather app found pre-installed on iOS devices. 
  </CardText>

  <CardActions border>
    <Button href="https://github.com/alexjivov/React-Weather-App" colored>Github</Button>
    <Button href="https://alexjivov.github.io/React-Weather-App/"colored>Live Demo</Button>
  </CardActions>
  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>

 {/*Project 4*/}
 <Card shadow={5} style ={{minWidth: '450'}}>
    <CardTitle style={{color: '#fff',height:'176px',background:'url(https://is2-ssl.mzstatic.com/image/thumb/Purple82/v4/7c/08/e7/7c08e73c-37cc-3f62-c24c-9a2cee9002f6/source/512x512bb.jpg) center / cover'}}></CardTitle>
    <CardText>
    <h5>React Chat</h5>
    Chat app built using only server side code in React. Users will be able to log in, choose their avatar of choice, engage in direct chats or create private chat rooms for group conversations. Chatkit API is being used to handle any back-end requirements.
    </CardText>
    <CardActions border>
      <Button href="https://github.com/alexjivov/React-Chat-App" colored>Github</Button>
      <Button href="https://alexjivov.github.io/React-Chat-App/" colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
  <br />


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
  {/* <Tab>MongoDB</Tab> */}
  </Tabs>
  <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://muse.cm/2AUpoRD) center / cover'}}></CardTitle>
  <CardText>
  <h5>JavaScript Quizlet</h5>
  A dynamic quiz page built using vanilla JavaScript. Choose your answers and be given your right and wrong answers upon submission. 
  </CardText>
  <CardActions border>
    <Button href="https://github.com/alexjivov/TriviaGame" colored>Github</Button>
    <Button href="https://alexjivov.github.io/TriviaGame/" colored>Live Demo</Button>
  </CardActions>
  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>
<br />


{/*Project 2 */}
 <Card shadow={5} style ={{minWidth: '450'}}>
 <CardTitle style={{color: '#fff',height:'176px',background:'url(https://bit.ly/2RBF5SY) center / cover'}}></CardTitle>
 <CardText>
 <h5>Psychic Game</h5>
 The Psychic Game A simple JavaScript game that allows you to guess the letter the computer chooses. Choose a letter from A - Z and test your psycic ability to see if you can read a computers mind!
 </CardText>
 <CardActions border>
   <Button href="https://github.com/alexjivov/Psychic-Game" colored>Github</Button>
   <Button href="https://alexjivov.github.io/Psychic-Game/" colored>Live Demo</Button>
 </CardActions>
 <CardMenu style={{color: '#fff'}}>
   <IconButton name="share" />
 </CardMenu>
</Card>


{/*Project 3*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(data:image/jpeg;base64,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) center / cover'}}></CardTitle>
<CardText>
<h5>Crystal Collector</h5>
This is a guessing game using numbers where the player will guess with numbers.
There will be four crystals displayed as buttons on the page.
The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.
</CardText>
<CardActions border>
  <Button href="https://github.com/alexjivov/unit-4-game" colored>Github</Button>
  <Button href="https://alexjivov.github.io/unit-4-game/" colored>Live Demo</Button>
</CardActions>
<CardMenu style={{color: '#fff'}}>
  <IconButton name="share" />
</CardMenu>
</Card>

{/*Project 4*/}
<br />
<Card shadow={5} style ={{minWidth: '450'}}>
<CardTitle style={{color: '#fff',height:'176px',background:'url(data:image/jpeg;base64,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) center / cover'}}></CardTitle>
<CardText>
<h5>JavaScript 30 Challenge</h5>
Built 30 vanilla JavaScript projects in 30 days using tutorials. No compilers, libraries, or frameworks were utizilied whatsoever.
</CardText>
<CardActions border>
  <Button href="https://github.com/alexjivov/JavaScript-30-Challenge" colored>Github</Button>
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
{/* <Tab>MongoDB</Tab> */}
  </Tabs>
  <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://occ-0-901-999.1.nflxso.net/art/b79f0/d9cf1ee6198424237372a00f209a254bb0bb79f0.jpg) center / cover'}}></CardTitle>
  <CardText>
  <h5>NodeJS Friend Finder</h5>
  Compatibility-based "FriendFinder" application -- basically a dating app. This is a full-stack site that takes in results from users' surveys, then compare their answers with those from other users.
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
 <CardTitle style={{color: '#fff',height:'176px',background:'url(https://i.imgur.com/eQgQWTr.jpg) center / cover'}}></CardTitle>
 <CardText>
 <h5>The Everything Node Store</h5>
 App that takes in orders from customers and deplete stock from the store's inventory. This is a CLI App focusing on node, mysql and express.
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
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg) center / cover'}}></CardTitle>
<CardText>
<h5>Eat Da Burger</h5>
Burger inventory logger utilizing Handlebars, mySQL, Node, Express and a custom-made ORM. Utilized Node and mySQL to query data and Handlebars to generate relevant HTML. 
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
<CardTitle style={{color: '#fff',height:'176px',background:'url(https://images.philips.com/is/image/PhilipsConsumer/AJ3232B_79-IMS-en_NZ?$jpglarge$&wid=1250) center / cover'}}></CardTitle>
<CardText>
<h5>Time Square</h5>
A full-stack corporate management site for both administrators and employees. Authentication for administrators to track employee task completion and billable hours, plus staff dashboards to track their project time and log their hours.
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
  {/* <Tab>MongoDB</Tab> */}
    </Tabs>}
    <div className="cards-grid">


{/*Project 1*/}
<Card shadow={5} style ={{minWidth: '450'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url(https://prods3.imgix.net/images/articles/2017_08/Non-Feature-Chefs-Cook-Steak.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670) center / cover'}}>The Hungry News Scraper</CardTitle>
  <CardText>
  App that scrapes the front page of the Tasting Table website to get all the top ranking food links as well as their metadata. Primarily uses the 'cheerio' package for scraping capability.
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
      {/* <Tab>MongoDB</Tab> */}
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