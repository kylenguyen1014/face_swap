import React from 'react'
import Navbar from './component/Navbar'
import Logo from './component/Logo'
import Images from './component/Images';
import Info from './component/Info';

export default function Home(props) {
    const { isSignIn, signOut, user, updateEntries } = props;
    return (
        <div className='Home'>
            <Navbar isSignIn={isSignIn} signOut={signOut}/>
            <Logo />
            {isSignIn && (
                <>
                    <Info name={user.name} entries={user.entries}/>
                    <Images updateEntries={updateEntries} email={user.email}/>
                </>
                )}
        </div>
    )
}
