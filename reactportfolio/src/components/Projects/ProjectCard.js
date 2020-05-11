import React from "react"
import "./style.css"


function ProjectCard(props){
return(
<>
    <div className="col-md-6 padding" >
      <a  href={props.link} target="_blank" rel="noopener noreferrer"> <img  src={props.image} className="pfPic" alt={props.projectName} />
      <div className="banner">
        <h4>{props.projectName}</h4>
        <p id="subtext">
        {/* <span className="badge bg-dark"> */}
          {props.technologies}
          {/* </span> */}
          </p>
          {/* <span className="badge bg-dark">{language}</span> <span className="badge bg-dark">Sequelize</span> <span className="badge bg-dark">Node.js</span> <span className="badge bg-dark">Express</span> <span className="badge bg-dark">Handlebars</span> <span className="badge bg-dark">Passport</span> <span class="badge bg-dark">Socket.io</span> <span class="badge bg-dark">Jdenticon</span> <span class="badge bg-dark">SimpleMDE</span> <span class="badge bg-dark">Markdown.it</span> <span class="badge bg-dark">Bulma</span></p> */}
      </div>
      </a>
      </div>  
    </>
    )
}

export default ProjectCard;
