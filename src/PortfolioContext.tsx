import React, { createContext, useState, useReducer } from "react";
import {portfolio} from './portfolio';

export interface IPortfolio {
    title: string,
    intro: string,
    texts:string[],
    images: string[]
}

export interface IPortfolioState {
    portfolios: IPortfolio[],
    portfolioIndex: number
}

type Action =
  | { type: 'NEXT' }
  | { type: 'BACK' }
  | { type: 'TO_PORTF'; amount: number };

interface IProps {
    children: JSX.Element[] | JSX.Element
}

const reducer = (state: IPortfolioState, action: Action) => {
    switch(action.type) {
        case 'NEXT':
            return state.portfolioIndex < state.portfolios.length ? {...state, portfolioIndex: state.portfolioIndex + 1} : {...state, portfolioIndex: state.portfolioIndex}
        case 'BACK':
            return state.portfolioIndex === 0 ? {...state, portfolioIndex: state.portfolioIndex} : {...state, portfolioIndex: state.portfolioIndex - 1}
        case 'TO_PORTF':
            return action.amount >= 0 && action.amount < state.portfolios.length ? {...state, portfolioIndex: action.amount} : {...state, portfolioIndex: state.portfolioIndex}
        default:
            throw new Error();
    }
}

export const PortfolioContext = createContext<any[]>([]);

export const PortfolioProvider = (props: IProps) => {
    const [state, dispatch] = useReducer(reducer, portfolio);

    return (
        <PortfolioContext.Provider value={[state, dispatch]}>
            {props.children}
        </PortfolioContext.Provider>
    );
};


