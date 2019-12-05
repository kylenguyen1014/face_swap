import React, {useState} from 'react';
import Navbar from './component/Navbar';
import './Register.css';

export default function Register(props) {
    const [userInput, setUserInput] = useState({name: '', email: '', password: ''});

    const handleUserInput = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    }
    
    const registerAccount = () => {
        const { name, email, password } = userInput;

        fetch('http://localhost:8000/register',{
            method : 'post',
            headers: {'Content-type': 'application/json'},
            body : JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => props.setUser(user))
        .catch(err => console.log(err))

        props.signIn();
        props.history.push('/');
    }
    return (
        <div className='Register d-flex flex-column'>
            <Navbar />
            <div className='w-25 m-auto card' style={{ height: 'auto'}}>
            <div className='card-body'>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control bg-transparent" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter your name" value={userInput.name} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control bg-transparent" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" value={userInput.email} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control bg-transparent" id="password" name='password' placeholder="Password" value={userInput.password} onChange={handleUserInput}/>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={registerAccount}>Register</button>
                </div>
            </div>
        </div>
        </div>
    )
}
