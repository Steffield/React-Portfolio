
import React from "react";
import "./Footer.css";

function Footer(){
  return(
<>
<footer className="center">
  {/* <a href="/" id="toTopBtn" className="button"><i className="fa fa-arrow-up margin-right"></i>Back to the Top</a> */}
  <div className="sectionMargin">
   
    <p id="copyright">Copyright &copy; Stephanie Lebby 
    <br></br>
    <span className="footerIcons">
      <a href="https://github.com/Steffield"><i className="fa fa-github icons"></i></a><a href="https://www.linkedin.com/in/stephanie-lebby"><i className="fa fa-linkedin icons"></i></a> 
    </span>
    </p>
  </div>
  
</footer>
</>


  )
}
export default Footer;
 