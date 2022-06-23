import React from "react";
import "./Nav.css"
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
        <Link id="medtrak" to="/" className="navbar-brand" >  MedTrak </Link>
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
              <Link  to="/" className="nav-link">  Home </Link>
            </li>
            <li>
              <Link to="help" className="nav-link">Help</Link>
            </li>
            <li>
              <Link to={{  pathname: "about-paragraph"}} className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link"> Login Page </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">  Sign Up Form</Link>
            </li>
            {/* adding inner pages on nav for testing purpose */}

            <li className="nav-item">
              <Link to="/drug" className="nav-link">  check drug info</Link>
            </li>
            <li className="nav-item">
              <Link to="/mainpage" className="nav-link">  Iner paaaggee</Link>
            </li>


            {/* <div className="searchInput-div">
               <form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               <button id="search-bt" className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
           </div> */}
            
          </ul> 
        </div>
      </div>
    </nav>
  );
}

export default Nav;
