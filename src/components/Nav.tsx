import React, { useState } from 'react';
import {MenuButton} from '../components/Button'
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface INavProps extends RouteComponentProps {

}

const Nav = (props: INavProps) => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const handleOpenMenu = (active: boolean) => {
        setMenuOpen(active);
    }
    console.log()
    return (
        <div className={props.location.pathname === '/' || props.location.pathname === '/home' ? 'none' : ''}>
            <div className={`nav${menuOpen ? '' : ' nav--hidden'}`}>
                <div className='nav-link-wrapper'>
                    <div onClick={() => {}} className='nav-link'><hr className='nav-link--strike'/>PORTOFOLIO</div>
                    <div onClick={() => {}} className='nav-link'><hr className='nav-link--strike'/>ABOUT</div>
                    <div onClick={() => {}} className='nav-link'><hr className='nav-link--strike'/>BLOG</div>
                </div>

                <div className='icon-wrapper'>
                    <a href='#'><FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} /></a>
                    <a href='#'><FontAwesomeIcon className='icon' icon={['fab', 'github-square']} /></a>
                </div>
            </div>
            <div className='header'> 
                <NavLink to='/' className='header-logo'>Sml</NavLink>
                <MenuButton className='header-menu' isActive={handleOpenMenu} />
            </div>
        </div>
    )
}

export default Nav;