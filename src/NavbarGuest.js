import React from 'react';
import ReactDOM from 'react-dom';
export default function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <a className="navbar-brand" href="/">Airo Airplane system</a>

            <div className="collapse navbar-collapse" id="navلآbbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>

                </ul>
            </div>
        </div>
    </nav>
    );
}
