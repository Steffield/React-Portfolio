import React from "react";
// import portfolioIMG from "../../backgroundImages/work.png"


function SectionImage (props){
  return(
    <>
      <div className="bgImg" id="portfolio"style={{height: window.innerHeight, width: window.innerWidth, backgroundImage: `url(${props.bgIMG})`}}>
        <div className="absolute">
          <span className="sectionSpan wide">{props.sectionName}</span>
        </div>
      </div>
    </>
  )
}

export default SectionImage;
