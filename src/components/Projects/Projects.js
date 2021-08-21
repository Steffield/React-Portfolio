import React from "react";
import ProjectCard from "./ProjectCard.js";
import burger from "../../projectImages/burger.png";
import codeQuery from "../../projectImages/CQ.png";
import workoutTracker from "../../projectImages/WorkoutTracker.png";
import weather from "../../projectImages/WA.png";
import covid19 from "../../projectImages/COVID19.png";
import EmpDir from "../../projectImages/EmpDir.png";
import Planner from "../../projectImages/Planner.png";
import M4S from "../../projectImages/M4S.png";

function Projects() {
  return (
    <>
      <div>
        <div className="row">
          <ProjectCard
            link="https://miles4smiles.herokuapp.com/"
            codeLink="https://github.com/Graphicaction/Miles4Smiles"
            image={M4S}
            projectName="Miles 4 Smiles"
            technologies="MongoDB, Mongoose, Express, React.js, Node.js, React-Chart2.js, Google Places API, Sass, Passport, Jest"
          />

          <ProjectCard
            link="https://code--query.herokuapp.com/"
            codeLink="https://github.com/Steffield/Mentor-Match"
            image={codeQuery}
            projectName="Code Query"
            technologies="MySQL, Sequelize, Node, Express, Handlebars, Passport, Socket.io, Jdenticon, SimpleMDE, Markdown.it, Bulma"
          />
        </div>

        <div className="row">
          <ProjectCard
            link="https://steffield.github.io/User-Directory/"
            codeLink="https://github.com/Steffield/User-Directory"
            image={EmpDir}
            projectName="Employee Directory"
            technologies="React.js, Axios, Third Party API randomuser.me, Bootstrap"
          />
          <ProjectCard
            link="https://steffield-burger-app.herokuapp.com/"
            codeLink="https://github.com/Steffield/Burger"
            image={burger}
            projectName="Burger App"
            technologies="MySQL, Node, Express, Materialize, JavaScript"
          />
        </div>

        <div className="row">
          <ProjectCard
            link="https://steffield.github.io/DayPlanner/"
            codeLink="https://github.com/Steffield/DayPlanner"
            image={Planner}
            projectName="Day Planner"
            technologies="Moment.js, JavasCript, localStorage"
          />
          <ProjectCard
            link="https://steffield.github.io/WeatherApp/"
            codeLink="https://github.com/Steffield/WeatherApp"
            image={weather}
            projectName="Weather App"
            technologies="OpenWeatherMap API, Moment.js, Node, jQuery, Bootstrap"
          />
        </div>

        <div className="row">
          <ProjectCard
            link="https://steffield-workout-tracker.herokuapp.com/"
            codeLink="https://github.com/Steffield/Workout-Tracker"
            image={workoutTracker}
            projectName="Workout Tracker"
            technologies="MongoDB, Mongoose, Express, Chart.js, Semantic UI, Node"
          />

          <ProjectCard
            link="https://steffield.github.io/react-covid19-app/"
            codeLink="https://github.com/Steffield/react-covid19-app"
            image={covid19}
            projectName="COVID19 Tracker"
            technologies="react.js, react-dom, chart.js, react-chartjs-2, react-countup, axios, material-ui, third party API"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
