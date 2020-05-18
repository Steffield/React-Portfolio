import React from "react";

// import portfolioIMG from "../../backgroundImages/work.png"


function SectionImage (props){
  // const [dimensions, setDimensions] = React.useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // });
  // React.useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth
  //     })
  //     window.addEventListener('resize', handleResize)
  //   }
  // })
  return(
    <>
      <div className="bgImg" id="portfolio"style={{height: window.innerHeight, backgroundImage: `url(${props.bgIMG})` }}>
        <div className="absolute">
          <span className="sectionSpan wide">{props.sectionName}</span>
        </div>
      </div>
    </>
  )
}

export default SectionImage;
