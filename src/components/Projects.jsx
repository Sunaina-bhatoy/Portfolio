import { useEffect, useState } from "react";
import projectsData from "../data/projectsData.json";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>My <span className="highlight">Projects</span> 💻</h1>
        <p>
          A collection of my favorite web development projects — blending creativity, functionality,
          and clean design. Each project reflects my growth and passion for building modern web apps.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
              
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
