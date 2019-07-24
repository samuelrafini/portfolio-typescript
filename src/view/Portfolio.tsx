import React, { useEffect, useContext, useState } from 'react';
import PageTransition from '../components/PageTransitions';
import { RouteComponentProps } from 'react-router';
import { PortfolioContext } from '../PortfolioContext';
import FadeIn from '../components/FadeIn'
import { GoButton } from '../components/Button'

interface IPortfolio {
  title: string,
  intro: string,
  texts: string[],
  images: string[],
}

const Portfolio = (props: RouteComponentProps) => {

  const [state, dispatch] = useContext(PortfolioContext);

  // console.log(state.portfolios[0]);


  return (
    <>
      <div className='portf-background'>
        <FadeIn
          width={'55%'}
          height={'100%'}
          delay={1.5}
          speed={1}
        >
          <div
            className={`portf-background__left`}
            style={{ backgroundImage: `url(${state.portfolios[0].images[0]})` }}>
          </div>
        </FadeIn>
        <div className='portf-background__right'></div>
        <FadeIn
          width={''}
          height={''}
          delay={1}
          speed={1.5}
        >
          {state.portfolios.map((portfolio: IPortfolio, index: number) => (
            <>
              <div
                className='portfolio'
                style={{display: index === state.portfolioIndex ? 'flex' : 'none'}}
              >
                <div
                  className='portfolio-img'
                  style={{ backgroundImage: `url(${portfolio.images[0]})`}}
                >
                </div>
                <div className='portfolio-content'>
                  <h1 className='portfolio__title'>{portfolio.title}</h1>
                  <p className='portfolio__intro'>{portfolio.intro}</p>
                  <div className='portfolio__button'>
                    <GoButton onClick={() => { }}>Go to project</GoButton>
                  </div>
                </div>
              </div>
            </>
          ))}
        </FadeIn>
      </div>
    </>
  );
}

export default Portfolio;