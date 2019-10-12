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
                        <li className="nav-item" data-toggle="modal" data-target="#signout" >
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
            <div className="modal fade" id="signout" tabIndex="-1" role="dialog" aria-labelledby="signoutModal" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Signing Out?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* <div className="modal-body">
                        Are you sure you want to sign out?
                    </div> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signout" onClick={() => setTimeout(signOut(),1000)}>Sign out</button>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
