import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    // header = nav
    <nav id="navbar" className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
         MedTrak
        </a> */}
        {/* turn medtrak to navbar back to home page */}
        <Link id="medtrak" to="/" className="navbar-brand">
          {" "}
          MedTrak{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <big>Home</big>
              </Link>
            </li>
            <li>
              <Link to="help" className="nav-link">
                <big>Help</big>
              </Link>
            </li>
            {/* <li>
              <Link to={{ pathname: "about-paragraph" }} className="nav-link">
                About us
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <big> Register</big>
              </Link>
            </li>
            {/* adding inner pages on nav for testing purpose */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">
               <big> Login</big>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/drug" className="nav-link">
                {" "}
                Page to show after log in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addmeds" className="nav-link">
                
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/mainpage" className="nav-link">  Iner paaaggee</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
