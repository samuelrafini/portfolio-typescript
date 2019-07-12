import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransitions';
import { RouteComponentProps } from 'react-router';

const Home = (props: RouteComponentProps) => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push('/portfolio');
    }, 4000);
  });

  return (
      <>
        <PageTransition/>
        <div className='home'>
            <div className='home-line'/>
            <div className='home-left'>
              <div>
                <h1 className='home-name'>Samuel</h1>
                <p className='home-title'>Full-Stack Developer</p>
              </div>
            </div>
            <div className='home-right'/>
        </div>
      </>
  );
}

export default Home;