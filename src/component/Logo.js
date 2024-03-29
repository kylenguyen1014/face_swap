import React from 'react'
import logo from '../logo.png';
import './Logo.css';
import Tilt from 'react-tilt';

function Logo() {
    return (
        <Tilt className='card mt-2 logo d-none d-sm-block'  options={{ max : 100 }}>
            <img className='logo-image' alt='logo' src={logo}/>
        </Tilt>
    )
}

export default Logo;
