import React from "react";
import "../../index.css";
import SectionImage from "../../components/SectionImage/SectionImage";
import cert from "../../backgroundImages/cert.jpg";

function Certification() {
  return (
    <div id="certifications">
      <SectionImage bgIMG={cert} sectionName={"CERTIFICATIONS"} />

      <div className="content section" id="certificationSection">
        <h3 className="center">SALESFORCE CERTIFICATIONS</h3>
        <hr></hr>
        <p className="center padding-10">
          <em>
            <a
              className="trailheadInText"
              href="https://trailblazer.me/id/slebby"
            >
              {" "}
              Here{" "}
            </a>
          </em>{" "}
          is a link to my trailhead profile that shows my certifications, badges
          and ranger status.
        </p>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>Administrator</b>
        </h5>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>Platform App Builder</b>
        </h5>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>Platform Developer 1</b>
        </h5>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>OmniStudio Developer</b>
        </h5>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>OmniStudio Consultant</b>
        </h5>
        <h5 className="center padding-10 SFblue">
          Salesforce Certified <b>Industries CPQ Developer</b>
        </h5>
      </div>
    </div>
  );
}

export default Certification;
