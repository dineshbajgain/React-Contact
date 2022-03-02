import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand" >Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link" >Link</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link disabled" >Disabled</Link>
                </li>
                </ul>   
            </div>
            </nav>
    )
}
export default Navbar