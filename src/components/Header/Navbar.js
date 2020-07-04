import React from "react";
// import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  // // toggle menu for small screens
  const handleToggle = () => {
    const x = document.getElementById("navFixed");
    if (
      x.className.indexOf("show") === -1 &&
      x.className.indexOf("hide-small") === 0
    ) {
      x.className = x.className.replace("hide-small", " show");
    } else {
      x.className = x.className.replace(" show", "hide-small");
    }
  };
  return (
    <>
      <div className="nav-top">
        <div id="navbar">
          <button
            id="navLink"
            className="button hide-md-lg"
            onClick={handleToggle}
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <button
            onClick={() => props.scrollTo(props.homeRef)}
            className="navbar-item button"
          >
            HOME
          </button>
          <button
            onClick={() => props.scrollTo(props.aboutRef)}
            className="navbar-item button hide-small"
          >
            <i className="fa fa-female"></i> ABOUT
          </button>
          <button
            onClick={() => props.scrollTo(props.portfolioRef)}
            className="navbar-item button hide-small"
          >
            <i className="fa fa-th"></i> PORTFOLIO
          </button>
          <button
            onClick={() => props.scrollTo(props.contactRef)}
            className="navbar-item button hide-small"
          >
            <i className="fa fa-address-card"></i> CONTACT
          </button>
          {/* <a href="#" className="navbar-item button">HOME</a>
        <a href="#about" className="navbar-item button hide-small"><i className="fa fa-female"></i> ABOUT</a>
        <a href="#portfolio" className="navbar-item button hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
        <a href="#contact" className="navbar-item button hide-small"><i className="fa fa-address-card"></i> CONTACT</a>
        */}
        </div>

        {/* <!-- Navbar small--> */}
        <div
          id="navFixed"
          className="hide-small hide-large hide-medium"
          onClick={handleToggle}
        >
          {/* <Link to="/about" className="navbar-item small button">
            ABOUT
          </Link>
          <Link to="/portfolio" className="navbar-item small button">
            PORTFOLIO
          </Link>
          <Link to="/contact" className="navbar-item  small button">
            CONTACT
          </Link> */}
          {/* <a href="#about" className="navbar-item small button">ABOUT</a>
        <a href="#portfolio" className="navbar-item small button" >PORTFOLIO</a>
        <a href="#contact" className="navbar-item small button" >CONTACT</a> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
