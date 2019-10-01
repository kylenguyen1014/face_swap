import React, {useState} from 'react'
import './SignIn.css';
import Navbar from './component/Navbar';
import { Link } from "react-router-dom";

export default function SignIn(props) {
    const {isSignIn, signIn} = props;
    const [userInput, setUserInput] = useState({email: '', password: ''});

    const handleSignIn = () => {
        signIn();
        props.history.push('/');
    }

    const handleUserInput = (e) => {
        const name = e.target.name;
        setUserInput({...userInput, [name]: e.target.value});
    }
    return (
        <div className='SignIn d-flex flex-column'>
            <Navbar isSignIn={isSignIn}/>
            {/* <SignInForm signIn={signIn}/> */}
            <div className='w-25 m-auto card' style={{ height: 'auto'}}>
                <div className='card-body'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name='email' type="email" className="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userInput.email} onChange={handleUserInput}/>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name='password' type="password" className="form-control bg-transparent" id="exampleInputPassword1" placeholder="Password" value={userInput.password} onChange={handleUserInput}/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
                        <Link to='/register'>Register?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
