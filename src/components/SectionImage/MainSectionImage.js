import React from "react";
import "./SectionImage.css";
import Typist from "react-typist";
import lh from "../../backgroundImages/lh.png";

function MainSectionImage() {
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }
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
  //
  // backgroundImage: `url(${props.bgIMG})
  // const handleThemeChange=() =>{
  //   console.log("clicked");
  //   const x = document.getElementsById("day");
  //   console.log(x);
  //   if (x.backgroundColor === "#e7d8d1" ) {
  //       x.backgroundColor.replace("#e7d8d1", " black");
  //   // } else {
  //   //     x.className = x.className.replace(" night", "day");
  //   }
  // }

  return (
    <>
      <div
        className="bgImg"
        id="home"
        style={{ height: window.innerHeight, backgroundImage: `url(${lh})` }}
      >
        <div id="bgTextLeft">
          <Typist>
            <span className="wide" id="nameSpan">
              Stephanie Lebby
            </span>
            <br></br>
            <span className="wide" id="jobSpan">
              Full Stack Web Developer
            </span>
            <Typist.Backspace count={24} delay={70} />
            <span className="wide" id="jobSpan">
              Salesforce Technical Consultant
            </span>
          </Typist>
        </div>
        {/* <div id="bgTextTopRight">
          <button id="changeTheme" onClick={toggleTheme} ><i className="fa fa-moon-o"></i></button>
      </div> */}
        <div id="bgTextRight">
          <a href="https://github.com/Steffield">
            <i className="fa fa-github iconsTop"></i>
          </a>
          <a href="https://www.linkedin.com/in/stephanie-lebby">
            <i className="fa fa-linkedin iconsTop"></i>
          </a>
          {/* <a href="https://www.linkedin.com/in/stephanie-lebby">
            <i className="fa fa-salesforce iconsTop"></i>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default MainSectionImage;
