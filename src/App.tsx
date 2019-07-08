import React from 'react';
import {GoButton, MenuButton} from './components/Button';
import './styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight, faGithubAlt);


const App: React.FC = () => {
  return (
   <>
    <GoButton type='go' onClick={(e) => console.log('clicked') }>Go to project</GoButton>
    <MenuButton />
   </>
  );
}

export default App;
