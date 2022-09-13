import React from "react";
import ProjectCard from "./ProjectCard.js";
import burger from "../../projectImages/burger.png";
import codeQuery from "../../projectImages/CQ.png";
import workoutTracker from "../../projectImages/WorkoutTracker.png";
import weather from "../../projectImages/WA.png";
import election from "../../projectImages/KYV.png";
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
            image={M4S}
            projectName="Miles 4 Smiles"
            technologies="MongoDB, Mongoose, Express, React.js, Node.js, React-Chart2.js, Google Places API, Sass, Passport, Jest"
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
            link="https://steffield-workout-tracker.herokuapp.com/"
            image={workoutTracker}
            projectName="Workout Tracker"
            technologies="MongoDB, Mongoose, Express, Chart.js, Semantic UI, Node"
          />

          <ProjectCard
            link="https://steffield.github.io/Project-One//"
            image={election}
            projectName="Know Your Vote"
            technologies="Google Civic Information API, Google Maps APi, JavaScript, JQuery, Bootstrap - Under construction"
          />
        </div>

        <div className="row">
          <ProjectCard
            link="https://steffield.github.io/User-Directory/"
            image={EmpDir}
            projectName="Employee Directory"
            technologies="React.js, Axios, Third Party API randomuserapi.me, Bootstrap"
          />
          <ProjectCard
            link="https://steffield-burger-app.herokuapp.com/"
            image={burger}
            projectName="Burger App"
            technologies="MySQL, Node, Express, Materialize, JavaScript"
          />
        </div>

        <div className="row">
          <ProjectCard
            link="https://steffield.github.io/DayPlanner/"
            image={Planner}
            projectName="Day Planner"
            technologies="Moment.js, JavasCript, localStorage"
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
  );
}

export default Projects;
