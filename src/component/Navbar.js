import React from 'react'
import logo from '../logo.png';

function Navbar(props) {
    const { isSignIn, signOut } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand text-uppercase text-primary font-weight-bolder" href="/"> Face_Swap</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {isSignIn ?  
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign Out</a>
                        </li>
                    :
                        <>
                            <li className="nav-item ">
                                <a className="nav-link" href="/signin">Sign In</a>
                            </li>
                            <li className="nav-item" onClick={() => signOut()}>
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
