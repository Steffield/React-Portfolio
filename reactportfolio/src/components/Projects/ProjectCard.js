import React from "react"
import "./Projects.css"


function ProjectCard(props){
return(
<>
    <div className="col-md-6 padding" >
      {/* <div className="card"> */}
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
      {/* </div> */}
      </div>  
    </>
    )
}

export default ProjectCard;

// import React, { Component } from 'react';

// class Portfolio extends Component {
//   render() {

//     if(this.props.data){
//       var projects = this.props.data.projects.map(function(projects){
//         var projectImage = 'images/portfolio/'+projects.image;
//         return <div key={projects.title} className="columns portfolio-item">
//            <div className="item-wrap">
//             <a href={projects.url} title={projects.title}>
//                <img alt={projects.title} src={projectImage} />
//                <div className="overlay">
//                   <div className="portfolio-item-meta">
//                  <h5>{projects.title}</h5>
//                      <p>{projects.category}</p>
//                   </div>
//                 </div>
//               <div className="link-icon"><i className="fa fa-link"></i></div>
//             </a>
//           </div>
//         </div>
//       })
//     }

//     return (
//       <section id="portfolio">

//       <div className="row">

//          <div className="twelve columns collapsed">

//             <h1>Check Out Some of My Works.</h1>

//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//                 {projects}
//             </div>
//           </div>
//       </div>
//    </section>
//     );
//   }
// }

// export default Portfolio;
