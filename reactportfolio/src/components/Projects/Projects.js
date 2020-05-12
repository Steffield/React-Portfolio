import React from 'react';
import ProjectCard from './ProjectCard.js'; 
import burger from "../../projectImages/burger.png"
import codeQuery from "../../projectImages/CQ.png"
import workoutTracker from "../../projectImages/WorkoutTracker.png"
import budget from "../../projectImages/OfflineBudget.png"
import weather from "../../projectImages/WA.png"
import election from "../../projectImages/KYV.png"

 
function Projects(props) {
  return (
<>
    <div>
      <div className="row">
      <ProjectCard
        link="https://steffield-workout-tracker.herokuapp.com/"
        image={workoutTracker}
        projectName="Workout Tracker"
        technologies="MongoDB, Mongoose, Express, Chart.js, Semantic UI, Node"
      />
      <ProjectCard
        link="https://code--query.herokuapp.com/"
        image={codeQuery}
        projectName="Code Query"
        technologies="MySQL, Sequelize, Node, Express, Handlebars, Passport, Socket.io, Jdenticon, SimpleMDE, Markdown.it, Bulma"
      />
      </div>

      <div className="row">
      <ProjectCard
        link="https://steffield-pwa-budget-tracker.herokuapp.com/"
        image={budget}
        projectName="On-/ Offline Budget Tracker"
        technologies="MongoDB, Mongoose, Chart.js, Express, IndexedDB, Bootstrap"
      />
      <ProjectCard
        link="https://steffield.github.io/Project-One//"
        image={election}
        projectName="Know Your Vote"
        technologies="Google Civic Information API, Google Maps APi, JavaScript, JQuery, Bootstrap"
      />
      </div>

      <div className="row">
      <ProjectCard
        link="https://steffield-burger-app.herokuapp.com/"
        image={burger}
        projectName="Burger App"
        technologies="MySQL, Node, Express, Materialize, JavaScript"
      />
      <ProjectCard
        link="https://steffield.github.io/WeatherApp/"
        image={weather}
        projectName="Weather App"
        technologies="OpenWeatherMap API, Moment.js, Node, jQuery, Bootstrap"
      />
      </div>

      <div className="row">
      <ProjectCard
        link="https://steffield-burger-app.herokuapp.com/"
        image={burger}
        projectName="Burger App"
        technologies="MySQL, Node, Express, Materialize, JavaScript"
      />
      <ProjectCard
        link="https://steffield.github.io/WeatherApp/"
        image={weather}
        projectName="Weather App"
        technologies="OpenWeatherMap API, Moment.js, Node, jQuery, Bootstrap"
      />
      </div>
    
    </div>
    </>
  )
}
 
export default Projects;