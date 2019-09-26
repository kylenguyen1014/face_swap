import React from 'react'
import Navbar from './component/Navbar'
import SignInForm from './component/SignInForm'

export default function SignIn(props) {
    return (
        <div className='SignIn'>
            <Navbar/>
            <SignInForm/>
        </div>
    )
}
