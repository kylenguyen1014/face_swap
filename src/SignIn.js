import React, {useState} from 'react';
import './SignIn.css';
import Navbar from './component/Navbar';
import { Link } from "react-router-dom";

export default function SignIn(props) {
    const {isSignIn, signIn, setUser} = props;
    const [userInput, setUserInput] = useState({email: '', password: ''});
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const handleUserInput = (e) => {
        const name = e.target.name;
        setUserInput({...userInput, [name]: e.target.value});
    }

    const handleAlerts = () => {
        if(error && message){
          return (
            <div className="alert alert-danger ml-2 w-25 ">
              {message}
            </div>
          )
        } else if(!error && message){
          return (
            <div className="alert alert-success w-25">
              {message}
            </div>
          )
        } else{
          return null;
        }
      }

      const submitHandler = (event) =>{
        event.preventDefault();
        if( !userInput.email ){
          setError(true);
          setMessage('Email is required');
        } else if( !userInput.password ){
          setError(true);
          setMessage('Password is required');
        } 
      }

    const handleSignIn = (event) => {
        submitHandler(event);
        if (!error){
            const { email, password } = userInput;
            fetch('https://face-swap-api.herokuapp.com/signin',{
                method : 'post',
                headers: {'Content-type': 'application/json'},
                body : JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id)
                {
                    setUser(user);
                    signIn();
                    props.history.push('/');
                }
            })
            .catch(err => console.log(err))
        }
    }

    
    return (
        <div className='SignIn d-flex flex-column'>
            <Navbar isSignIn={isSignIn} />
            <div className='m-auto card form' style={{ height: 'auto'}}>
                <div className='card-body'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name='email' type="email" className="form-control bg-transparent" aria-describedby="emailHelp" placeholder="Enter email" value={userInput.email} onChange={handleUserInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name='password' type="password" className="form-control bg-transparent"  placeholder="Password" value={userInput.password} onChange={handleUserInput}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
                        <Link to='/register'>Register?</Link>
                    </div>
                </div>
            </div>
            {handleAlerts()}
        </div>
    )
}
