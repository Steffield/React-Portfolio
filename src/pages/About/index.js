import React from "react";
import "../../index.css";
import me from "../../backgroundImages/me.png";
import Resume from "../../backgroundImages/Resume.pdf";

function About(props) {
  //add function when scrolled to top go to home, when scrolled to bottom go to portfolio
  return (
    <>
      <div className="content section" id="about" ref={props.aboutRef}>
        <h3 className="center">ABOUT ME</h3>
        <hr></hr>
        <p className="center padding-10">
          <em>
            Full Stack Web Developer/ Technical Consultant Team Lead at
            Salesforce
          </em>
        </p>
        <p>
          I am Full Stack Web Developer with experience as Technical Consultant
          Team Lead at Salesforce, working mainly on projects related to health
          insurance. Currently, I am a Team Lead of a small team of entry level
          Associate Technical Consultants and am working as a pod lead on a
          health insurance portal project, using OmniStudio Tools, such as
          OmniScripts, FlexCards, IntegrationProcedures, DataRaptors as well as
          Apex, SOQL, Lightning Web Components etc. working with Experience
          Cloud to implement a member portal by using Experience Builder. I am a
          certified OmniStudio Developer, OmniStudio Consultant and OmniStudio
          CPQ Developer, a Lightning Web Components and Apex Specialist and have
          double star Ranger Trailhead status. I am passionate about life long
          learning and opportunities to continue to improve my skills as
          developer, Salesforce skills, and skills to help customers implement
          the best possible solution for their requirements. Before I changed
          career paths to become a full stack web developer, I was a speech
          language pathologist and research assistant working in practices and
          universities in the USA and Germany. I am fluent in English and
          German.
          {/* I am a Full Stack Web Developer with experience in health care,
          education, and data analysis. I discovered my love for coding when I
          was enrolled in a PhD program in Communication Sciences and Disorders
          and have since taken online courses, created small projects in my free
          time and finally decided to change career paths and fully commit to
          coding. I recently received a certification in Full Stack Web
          Development from the University of North Carolina. I enjoy building
          responsive applications using front and back end skills.  */}
          In my spare time I love to travel and the above background picture is
          an edited picture of one of my favorite places in New Zealand.
        </p>
        <div className="row">
          <div className="col-md-12 center" id="aboutRow">
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-md-6">
                <h4>Stephanie Lebby</h4>
                <br></br>
                <img
                  src={me}
                  id="myPhoto"
                  className="gradient-border"
                  alt="Stephanie Lebby"
                  width="280"
                  height="300"
                ></img>
              </div>
              <div className="col-md-6">
                <h4>My Skills</h4>
                <br></br>
                <p>
                  HTML, CSS and CSS Frameworks (such as Bootstrap, Bulma,
                  Materialize, Semantic UI), Sass, React, JavaScript, JQuery,
                  Lightning Web Components, Salesforce OmniStudio, SOQL, Apex,
                  Node.js, Express, Passport, RESTful APIs, relational and
                  non-relational databases, such as MySQL and Sequelize, SOQL,
                  MongoDB and Mongoose, client-side storage with IndexedDB API
                  etc.
                </p>

                <br></br>

                <form method="get" action={Resume}>
                  <button
                    className="btn btn-outline-dark"
                    id="resumeBtn"
                    type="submit"
                  >
                    <i className="fa fa-download fa-fw"></i> Download Resume
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
