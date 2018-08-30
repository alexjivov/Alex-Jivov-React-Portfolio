import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/homepage';
import AboutMe from './pages/aboutme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
         <Route  path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Resume" component={Resume} />
          <Route path="/AboutMe" component={AboutMe} />
    </Switch>
)

export default Main;