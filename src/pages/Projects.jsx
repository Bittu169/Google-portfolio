import { useEffect, useState } from "react";
import "./Projects.css";
import { projectMeta } from "../data/project";

const GITHUB_USERNAME = "Bittu169";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

    useEffect(() => {
      document.title = "Bittu's Projects";
    }, []);  

  return (
    <section className="projects-section">
      {repos.map((repo) => {
        const meta = projectMeta[repo.name] || {};

        return (
          <div className="project-card" key={repo.id}>
            {/* IMAGE */}
            <div className="project-image">
              <img
                src={meta.image || "/projects/default.png"}
                alt={repo.name}
              />
            </div>

            {/* TITLE */}
            <h3>{meta.title || repo.name.replace(/[-_]/g, " ")}</h3>

            {/* DESCRIPTION */}
            <p>
              {meta.description ||
                repo.description ||
                "Project details available on GitHub."}
            </p>

            {/* BUTTONS */}
            <div className="project-buttons">
              {meta.videoDemo && (
                <a href={meta.videoDemo} target="_blank" rel="noreferrer">
                  Video Demo
                </a>
              )}

              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}

              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
