import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/Logo'
import Images from './component/Images';
import Info from './component/Info';

export default function Home(props) {
    const { isSignIn, signOut, name, entries } = props;
    return (
        <div className='Home'>
            <Navbar isSignIn={isSignIn} signOut={signOut}/>
            <Logo />
            {isSignIn && <Info name={name} entries={entries}/>}
            {isSignIn && <Images />}
        </div>
    )
}
