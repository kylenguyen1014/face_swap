import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/Logo'
import Images from './component/Images';

export default function Home(props) {
    const { isSignIn, signOut } = props;
    return (
        <div className='Home'>
            <Navbar isSignIn={isSignIn} signOut={signOut}/>
            <Logo />
            {isSignIn && <Images />}
        </div>
    )
}
