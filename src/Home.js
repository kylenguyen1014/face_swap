import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/Logo'

export default function Home(props) {
    const { isSignIn, signOut } = props;
    return (
        <div className='Home'>
            <Navbar signOut={signOut}/>
            <Logo isSignIn={isSignIn}/>
        </div>
    )
}
