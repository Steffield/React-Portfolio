import React from "react";
import "./Projects.css";

function ProjectCard(props) {
  return (
    <>
      <div className="col-md-6 padding">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {" "}
          <img
            src={props.image}
            className="pfPic"
            alt={props.projectName}
          />{" "}
        </a>
        <div className="banner">
          <h4>
            {props.projectName}
            <a
              className="codeLink"
              href={props.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github float-right" />
            </a>
          </h4>

          <p id="subtext">{props.technologies}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
