import React from "react";
import "./SectionImage.css"
import Typist from 'react-typist';

function MainSectionImage(props){
  // const [height, setHeight] = React.useState(window.innerHeight);
  // const [width, setWidth] = React.useState(window.innerWidth)
  
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight)
  // };

  // React.useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     return () =>
  //       window.removeEventListener('resize', handleResize)
  //     })
      // backgroundImage: `url(${lh})

  return(
    <>
    <div className="bgImg" id="home" style={{backgroundImage: `url(${props.bgIMG})`}}>
      <div id="bgTextLeft">
      
      <Typist>
        <span className="wide" id="nameSpan">
          Stephanie Lebby</span>
        <br></br>
        <span className="wide" id="jobSpan">Front End</span>
        <Typist.Backspace count={9} delay={70}/>
        <span className="wide" id="jobSpan">Full Stack Web Developer</span>
      </Typist>

      </div>
      <div id="bgTextRight">
          <a href="https://github.com/Steffield"><i class="fa fa-github iconsTop"></i></a>
          <a href="https://www.linkedin.com/in/stephanie-lebby-684098118?trk=people-guest_profile-result-card_result-card_full-click"><i class="fa fa-linkedin iconsTop"></i></a>    
      </div>
    </div>


    </>
  )
}

export default MainSectionImage;
