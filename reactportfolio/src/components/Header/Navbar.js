import React, {useState } from "react";
import "./Navbar.css";

function Navbar(){
 

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
        // x.className -= "hide-small";
    } else {
        x.className = x.className.replace(" show", "hide-small");
    }
}
  return(
    // <!-- Navbar-->
    <>
    <div className="nav-top">
      <div id="navbar">
        <a id ="navLink" className="button hide-md-lg" 
        href="#" onClick={handleToggle} 
        title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </a>
        <a href="/" className="navbar-item button">HOME</a>
        <a href="/about" className="navbar-item button hide-small"><i className="fa fa-female"></i> ABOUT</a>
        <a href="/portfolio" className="navbar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
        <a href="/contact" className="navbar-item button hide-small"><i className="fa fa-address-card"></i> CONTACT</a>
        {/* <!-- <a id="search" href="#" class="navbar-item button hide-small">
          <i class="fa fa-search"></i>
        </a> --> */}
      </div>

      {/* <!-- Navbar small--> */}
      <div id="navFixed" className="hide-small hide-large hide-medium" onClick={handleToggle}>
        <a href="/about" className="navbar-item button">ABOUT</a>
        <a href="/portfolio" className="navbar-item button" >PORTFOLIO</a>
        <a href="/contact" className="navbar-item button" >CONTACT</a>
        {/* <!-- <a href="#" class="navbar-item button">SEARCH</a> --> */}
      </div>
    </div>
    </>

  )
}

export default Navbar;