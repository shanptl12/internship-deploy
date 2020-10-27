import React from 'react'

import SearchIcon from '../../assets/Search-Icon.svg'
import BellIcon from '../../assets/bell-icon.svg'
import NoImg from '../../assets/no-img.png'
import UserPic from '../../assets/User-Pic.png'
import MenuIcon from '../../assets/hamburger.svg'
import FilmtwineLogoBlack from '../../assets/Filmtwine-logo-black.svg'
import './Navbar.scss'

import { actions } from '../../store/reducers/runtime'


const NavbarSearch = () => {
    return (
        <div className='navbar-search navbar-item'>
            <img src={SearchIcon} alt='icon' />
            <input type='text' placeholder='Search Films and Filmmakers' />
        </div>
    )
}

const Notification = () => {
    return (
        <div className='navbar-item navbar-notifications clickable'>
            <img src={BellIcon} alt='icon' />
        </div>
    )
}

const Profile = () => {
    return (
        <div className='navbar-item navbar-profile clickable'>
            <img src={UserPic} className='navbar-profile-pic' alt='profile pic' />
        </div>
    )
}

function Navbar () {
    return(
        <div className='navbar'>
            <div className='navbar-section-left'>
                <div className='navbar-menu clickable navbar-item' onClick={actions.openSidebar}>
                    <img src={MenuIcon} alt='icon' />
                </div>
                <div className='navbar-logo clickable'>
                    <img src={FilmtwineLogoBlack} alt='logo'/>
                </div>
            </div>
            <div className='navbar-section-right'>
                <NavbarSearch/>
                <Notification/>
                <Profile />
            </div>
        </div>
    )
}

export default Navbar
