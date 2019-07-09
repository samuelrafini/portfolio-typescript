import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './view/Home'
import './styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight, faGithubAlt);


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </Switch>
  );
}

export default App;
