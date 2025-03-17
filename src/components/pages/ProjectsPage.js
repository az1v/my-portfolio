import React, {useState} from "react";
import { Link } from "react-router-dom";

function ProjectsPage() {

// Use useState to manage an array of projects
const [projects] = useState([
    { id: 1, name: "Nyan Cat", description: "In the game, you get to play as a cheese burger that is trying to avoid getting eaten by the Nyan cats", repoLink: "https://github.com/az1v/project-js-nyan-cat" },
    { id: 2, name: "SlingAir", description: "In this project my classmate Nha Thi and I were able to: get reservation, add reservation, update reservation, delete reservation, get flight, get flights, and get a sigle reservation ", repoLink: "https://github.com/nhathivuong/project-slingair" }
  ]);




  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={project.repoLink}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;