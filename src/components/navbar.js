import React from 'react';
import logo from './assets/netflix-logo2.png'
import './navbar.css'
import userimage from './assets/user.jpg'

function Navbars() {
  return (
    <div className='navbar'>
        <nav className='nav'>
            <img src={logo} alt='logo' className='image-logo'></img>
            <img src={userimage} alt="username" className='user-img'></img>
        </nav>
    </div>
  )
}

export default Navbars