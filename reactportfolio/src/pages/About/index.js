import React from "react";
import "../../index.css";
import me from "../../backgroundImages/me.png"
// import Container from "../../components/Container";


function About(){
  return(
<>
      <div className="content section" id="about">
        <h3 className="center">ABOUT ME</h3>
        <hr></hr>
        <p className="center padding-10"><em>Bilingual German-English Full Stack Web Developer</em></p>
        <p>I am a full stack web developer with experience in health care, education, and data analysis. I discovered my love for coding when I was enrolled in a PhD program in Communication Sciences and Disorders and have since taken various online courses, created small projects in my free time and finally decided to change career paths and fully commit to coding. I am about to complete a certificate in Full Stack Web Development from the University of North Carolina. I enjoy building responsive applications using front and back end skills. In my spare time I love to travel and the above background picture is from one of my favorite places, New Zealand.</p>
        <div className="row">
          <div className="col-md-12 center" id="aboutRow">      
          <br></br><br></br>
            <div className="row">
              <div className= "col-md-6">
                <h4>Stephanie Lebby</h4>
                <br></br>
                <img src={me} id="myPhoto" class="gradient-border" alt="Stephanie Lebby" width="280" height="300"></img>
              </div>
              <div className="col-md-6">
                <h4>My Skills</h4>
                <br></br>
                <p>HTML, CSS and CSS Frameworks (such as Bootstrap, Bulma, Materialize), React, JavaScript, JQuery, Node.js, Express, Passport, RESTful APIs, relational and non-relational databases, such as MySQL and Sequelize, MongoDB and Mongoose, client-side storage with IndexedDB API etc.</p>
    
                <br></br>
            
                <form method="get" action="./assets/images/Resume.pdf">
                <button className="btn btn-outline-dark"id="resumeBtn" type="submit"><i className="fa fa-download fa-fw"></i> Download Resume</button>
                </form>
              </div>
      
            </div>
          </div>
        </div>
      </div>
      </>

  )
}

export default About;