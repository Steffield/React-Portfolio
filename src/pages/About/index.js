import React from "react";
import "../../index.css";
import me from "../../backgroundImages/me.png";
import Resume from "../../backgroundImages/Resume.pdf";

function About() {
  //add function when scrolled to top go to home, when scrolled to bottom go to portfolio
  return (
    <>
      <div className="content section" id="about">
        <h3 className="center">ABOUT ME</h3>
        <hr></hr>
        <p className="center padding-10">
          <em>Salesforce Technical Consultant</em>
        </p>
        <p>
          I am a career changer with an insatiable passion for learning and
          problem solving. I have a background in Speech Language Pathology (MS
          in Human Communication Sciences) and completed a Full Stack Web
          Development Bootcamp at the University of North Carolina in 2020. In
          my previous career I gained a decade of experience as Speech Language
          Pathologist, Instructor and Research Assistant in practices, hospitals
          and universities in Germany and the US. Currently, I enjoy learning
          more about Salesforce every day and using OmniStudio Tools, Lightning
          Web Components and Apex to find out-of-the-box or custom solutions for
          business challenges and requirements. In my spare time I love to
          travel and the above background picture is an edited picture of one of
          my favorite places in New Zealand.
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
                  Node.js, Express, Passport, RESTful APIs, relational and
                  non-relational databases, such as MySQL and Sequelize, MongoDB
                  and Mongoose, client-side storage with IndexedDB API etc.
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
