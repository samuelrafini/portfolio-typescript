import React, { ReactNode, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

enum classType {
  button='button',
}

interface ButtonProps {
  children: ReactNode,
  onClick: (event: MouseEvent<HTMLElement>) => void,
}

export const GoButton = (props: ButtonProps) => {
  return (
      <>
        <button
          className={`${classType.button}`}
          onClick={props.onClick}
        >
            <FontAwesomeIcon className='right-icon' icon="angle-right"/> 
            <span className='button-text'>{props.children}</span>
        </button>
      </>
  );
}

