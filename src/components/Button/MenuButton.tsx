import React, { ReactNode, MouseEvent, useState, useEffect } from 'react';

interface IButtonProps {
}


export const MenuButton = (props: IButtonProps) => {
const [menuActive, setActive] = useState(false);

const handleClick = (e: Event)=> {
    menuActive ? setActive(false) : setActive(true);
    console.log(menuActive);
}

  return (
      <div className='menu' onClick={() => menuActive ? setActive(false) : setActive(true)}>
        <p>{menuActive ? 'waw' : 'boo'}</p>
        <div className={`menu-top${menuActive ? ' menu-top--turn': ''}`}/>
        <div className={`menu-middle${menuActive ? ' menu-middle--fadeout' : ''}`}/>
        <div className={`menu-bottom${menuActive ? ' menu-bottom--turn': ''}`}/>
      </div>
  );
}
