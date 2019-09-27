import React from 'react'
import './SignIn.css';
import Navbar from './component/Navbar';

export default function SignIn(props) {
    const {isSignIn, signIn} = props;
    return (
        <div className='SignIn d-flex flex-column'>
            <Navbar isSignIn={isSignIn}/>
            {/* <SignInForm signIn={signIn}/> */}
            <div className='w-25 m-auto card' style={{ height: 'auto'}}>
                <div className='card-body'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control bg-transparent" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={signIn}>Sign In</button>
                        <p>Register?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
