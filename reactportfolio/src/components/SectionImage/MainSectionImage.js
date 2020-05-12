import React, {Component} from "react";
import "./SectionImage.css"
import lh from "../../backgroundImages/lh.png";
import Typist from 'react-typist';

function MainSectionImage(){
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      window.addEventListener('resize', handleResize)
    }
  })

  return(
    <>
    <div className="bgImg" id="home" style={{height: dimensions.height,  backgroundImage: `url(${lh})`}}>
      {/* <img  src={lh} alt="mainImg" /> */}
      <div id="bgTextLeft">
      <Typist>
        <span className="wide" id="nameSpan">
          Stephanie Lebby</span>
        <br></br>
        <span className="wide" id="jobSpan">Speech Language Pathologist</span>
        <Typist.Backspace count={27} delay={100}/>
        <span className="wide" id="jobSpan">Full Stack Web Developer</span>
        </Typist>
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
