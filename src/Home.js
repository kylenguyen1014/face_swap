import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/Logo'

export default function Home(props) {
    const { isSignIn } = props;
    return (
        <div className='Home'>
            <Navbar/>
            <Logo isSignIn={isSignIn}/>
        </div>
    )
}
