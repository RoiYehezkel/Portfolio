import React from "react";
import "./Projects.css";
import Animation from "../Animation";
import DATA from "./projects.json";

function Projects() {
  return (
    <section id="projects">
      <Animation>
        <h5 className="headline-h5">My Recent Work</h5>
        <h2 className="headline-h2">Projects</h2>
        <div className="container projects_container">
          {DATA.map((item) => (
            <article key={item.id} className="projects_item">
              <div className="projects_item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <h5>{item.tech}</h5>
              <div className="projects_item-cta">
                {item.github && (
                  <a
                    href={item.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}

                {item.frontend && (
                  <a
                    href={item.frontend}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend
                  </a>
                )}
                {item.backend && (
                  <a
                    href={item.backend}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Animation>
    </section>
  );
}

export default Projects;
