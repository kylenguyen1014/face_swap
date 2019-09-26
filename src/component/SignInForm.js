import React from 'react'

export default function SignInForm() {
    return (
        <div className='w-25 m-auto'>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>Register?</p>
            </div>
            
        </div>
    )
}
