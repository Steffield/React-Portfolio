import React from "react";
import "../../index.css";
import MainSectionImage from "../../components/SectionImage/MainSectionImage"
import lh from "../../backgroundImages/lh.png";


function Home(props){

  //window.scrollTo ...when bottom of page hit change to route about
  return (
    <>
    <MainSectionImage bgIMG={lh}/>
    </>
  )
}

export default Home;
