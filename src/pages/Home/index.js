import React from "react";
import "../../index.css";
import MainSectionImage from "../../components/SectionImage/MainSectionImage";

function Home(props) {
  //window.scrollTo ...when bottom of page hit change to route about
  return (
    <>
      <MainSectionImage homeRef={props.homeRef} />
    </>
  );
}

export default Home;
