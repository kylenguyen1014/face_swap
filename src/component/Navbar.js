import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    const { isSignIn, signOut } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link className="navbar-brand text-uppercase text-primary font-weight-bolder" to="/"> Face_Swap</Link>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {isSignIn ?  
                        <li className="nav-item" onClick={() => setTimeout(signOut(), 1000)}>
                            <Link className="nav-link" to="/">Sign Out</Link>
                        </li>
                    :
                        <>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
