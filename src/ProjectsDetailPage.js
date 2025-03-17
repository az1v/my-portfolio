import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetailPage() {
  // Extract projectId from URL using useParams
  const { projectId } = useParams();

  // Sample project data (in a real app, you might fetch this from an API or database)
  const projects = [
    { id: 1, name: "Nyan Cat", description: "In the game, you get to play as a cheese burger that is trying to avoid getting eaten by the Nyan cats", repoLink: "https://github.com/az1v/project-js-nyan-cat" },
    { id: 2, name: "SlingAir", description: "In this project my classmate Nha Thi and I were able to: get reservation, add reservation, update reservation, delete reservation, get flight, get flights, and get a sigle reservation ", repoLink: "https://github.com/nhathivuong/project-slingair" }
  ];
  // Find the project by ID
  const project = projects.find((proj) => proj.id.toString() === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectDetailPage;