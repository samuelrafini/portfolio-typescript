import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './view/Home'
import Nav from './components/Nav';

import './styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Portfolio from './view/Portfolio';
library.add(faAngleRight, faGithubAlt, faLinkedin, faGithubSquare);


const App = () => {
  return (
    <> 
      <Route component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </>
  );
}

export default App;
