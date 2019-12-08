import React, {useState} from 'react';
import Navbar from './component/Navbar';
import './Register.css';

export default function Register(props) {
    const [userInput, setUserInput] = useState({name: '', email: '', password: ''});
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const handleUserInput = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
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
        if( !userInput.name ){
          setError(true);
          setMessage('Name is required');
        } else if( !userInput.email ){
          setError(true);
          setMessage('Email is required');
        } else if( !userInput.password ){
          setError(true);
          setMessage('Password is required');
        } 
      }
    const registerAccount = (event) => {
        submitHandler(event);
        if (!error){
            const { name, email, password } = userInput;

            fetch('https://face-swap-api.herokuapp.com/register',{
                method : 'post',
                headers: {'Content-type': 'application/json'},
                body : JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id)
                {
                    props.setUser(user);
                    props.signIn();
                    props.history.push('/');
                }
            })
            .catch(err => console.log(err))
        }
        

    }
    return (
        <div className='Register d-flex flex-column'>
            <Navbar />
            <div className='m-auto card form' style={{ height: 'auto'}}>
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
            {handleAlerts()}
        </div>
    )
}
