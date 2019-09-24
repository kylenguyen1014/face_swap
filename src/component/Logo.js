import React from 'react'
import logo from '../logo.png';
import './Logo.css';

function Logo() {
    return (
        <div className='card'>
            <img className='card-image' alt='logo' src={logo}/>
        </div>
    )
}

export default Logo;
