import React, {useState} from 'react'
import Navbar from './component/Navbar';
import './Register.css';

export default function Register(props) {
    const [userInput, setUserInput] = useState({name: '',email: '', password: ''});

    const handleUserInput = (e) => {
        const name = e.target.name;
        setUserInput({...userInput, [name]: e.target.value});
    }
    return (
        <div className='Register d-flex flex-column'>
            <Navbar />
            <div className='w-25 m-auto card' style={{ height: 'auto'}}>
            <div className='card-body'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control bg-transparent"  aria-describedby="emailHelp" placeholder="Enter your name" value={userInput.name} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control bg-transparent" aria-describedby="emailHelp" placeholder="Enter email" value={userInput.email} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control bg-transparent"  placeholder="Password" value={userInput.password} onChange={handleUserInput}/>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
        </div>
    )
}
