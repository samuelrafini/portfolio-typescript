import React, { ReactNode, MouseEvent, useState, useEffect } from 'react';

interface IButtonProps {
  isActive: Function,
  className: string
}


export const MenuButton = (props: IButtonProps) => {
const [menuActive, setActive] = useState(false);

const handleClick = () => {
    menuActive ? setActive(false) : setActive(true);
}

useEffect(() => {
  props.isActive(menuActive);
});

  return (
      <div className={`menu${' ' + props.className}`} onClick={() => handleClick()}>
        <div className={`menu-top${menuActive ? ' menu-top--turn': ''}`}/>
        <div className={`menu-middle${menuActive ? ' menu-middle--fadeout' : ''}`}/>
        <div className={`menu-bottom${menuActive ? ' menu-bottom--turn': ''}`}/>
      </div>
  );
}
