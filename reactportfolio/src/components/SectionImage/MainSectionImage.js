import React from "react";
import "./style.css"
import lh from "../../backgroundImages/lh.png";


function MainSectionImage(){
  return(
    <>
    <div className="bgImg" id="home" style={{height: window.innerHeight, width: window.innerWidth, backgroundImage: `url(${lh})`}}>
      {/* <img  src={lh} alt="mainImg" /> */}
      <div id="bgTextLeft">
        <span className="wide" id="nameSpan">Stephanie Lebby </span>
        <br></br>
        <span className="wide" id="jobSpan">Full Stack Web Developer</span>

      </div>
      <div id="bgTextRight">
        {/* <!-- <span id="rightSpan" class="center wide"><span class="hide-small"> -->
            <!-- <div class="col-lg-6"> --> */}
          <a href="https://github.com/Steffield"><i class="fa fa-github iconsTop"></i></a>
          <a href="https://www.linkedin.com/in/stephanie-lebby-684098118?trk=people-guest_profile-result-card_result-card_full-click"><i class="fa fa-linkedin iconsTop"></i></a>

               {/* <!-- </div> -->
        <!-- </span></span>--> */}
            
      </div>
    </div>


    </>
  )
}

export default MainSectionImage;
