import React from "react";
import { Link} from "react-router-dom";

import "./Navbar.css";

function Navbar(){
 
// add function that if scroll meets end of window route to about etc. 

    // // navbar change when scrolling
    // window.onscroll = function() {
    //   myFunction()
    // };
    
    // function myFunction() {
    //     var navbar = document.getElementById("navbar");
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         navbar.className = " card, animate-top";
    //     } else {
    //         navbar.className = navbar.className.replace(" card", "");
        
    // }

// // toggle menu for small screens
const handleToggle=  () => {
    var x = document.getElementById("navFixed");
    if (x.className.indexOf("show") === -1 && x.className.indexOf("hide-small") === 0) {
        x.className = x.className.replace("hide-small", " show");
    } else {
        x.className = x.className.replace(" show", "hide-small");
    }
}
  return(
    <>
    <div className="nav-top">
      <div id="navbar">
        <button id ="navLink" className="button hide-md-lg" onClick={handleToggle} title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </button>
        <Link to="/" className="navbar-item button">HOME</Link>
        <Link to="/about" className="navbar-item button hide-small"><i className="fa fa-female"></i> ABOUT</Link>
        <Link to="/portfolio" className="navbar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</Link>
        <Link to="/contact" className="navbar-item button hide-small"><i className="fa fa-address-card"></i> CONTACT</Link>
        {/* <a href="#" className="navbar-item button">HOME</a>
        <a href="#about" className="navbar-item button hide-small"><i className="fa fa-female"></i> ABOUT</a>
        <a href="#portfolio" className="navbar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
        <a href="#contact" className="navbar-item button hide-small"><i className="fa fa-address-card"></i> CONTACT</a>
        */}
      </div>

      {/* <!-- Navbar small--> */}
      <div id="navFixed" className="hide-small hide-large hide-medium" onClick={handleToggle}>
        <Link to="/about" className="navbar-item small button">ABOUT</Link>
        <Link to="/portfolio" className="navbar-item small button" >PORTFOLIO</Link>
        <Link to="/contact" className="navbar-item  small button" >CONTACT</Link> 
        {/* <a href="#about" className="navbar-item small button">ABOUT</a>
        <a href="#portfolio" className="navbar-item small button" >PORTFOLIO</a>
        <a href="#contact" className="navbar-item small button" >CONTACT</a> */}
      </div>
    </div>
    </>

  )
}

export default Navbar;