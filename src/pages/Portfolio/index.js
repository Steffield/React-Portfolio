import React from "react";
import "../../index.css";
import SectionImage from "../../components/SectionImage/SectionImage";
import Projects from "../../components/Projects/Projects";
import work from "../../backgroundImages/work.png";

function Portfolio(props) {
  return (
    <div id="portfolio" ref={props.portfolioRef}>
      <SectionImage bgIMG={work} sectionName={"PORTFOLIO"} />

      <div className="content section" id="portfolioSection">
        <h3 className="center">MY PORTFOLIO</h3>
        <hr></hr>
        <p className="center padding-10">
          <em>
            Here are some of my latest projects. Click on the images to be
            linked to the deployed application or click
            <a className="githubInText" href="https://github.com/Steffield">
              {" "}
              here{" "}
            </a>
            to see all of my Github repositories.
          </em>{" "}
        </p>

        <Projects />
      </div>
    </div>
  );
}

export default Portfolio;
