import React from 'react'

function Navbar(props) {
    const { isSignIn } = props;

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    {isSignIn ?  
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sign Out</a>
                        </li>
                    :
                        <>
                            <li class="nav-item ">
                                <a class="nav-link" href="/signin">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
