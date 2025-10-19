import React from "react";
import { FaGithub } from "react-icons/fa";

const labs = [
  {
    title: "Secure Web App Lab",
    stack: "React, Node.js, Express, Helmet, JWT",
    summary: "A lab focused on secure-by-design web application patterns and automated security checks.",
    repo: "https://github.com/Handson-A",
  },
  {
    title: "Pentest Workshop",
    stack: "Kali Linux, Nmap, Burp Suite, Custom Scripts",
    summary: "Collection of exercises and proof-of-concepts demonstrating common vulnerabilities and mitigations.",
    repo: "https://github.com/Handson-A",
  },
  {
    title: "Test Automation Suite",
    stack: "Cypress, Jest, GitHub Actions, Node.js",
    summary: "Sample test suites and CI pipelines that emphasize reliability and fast feedback loops.",
    repo: "https://github.com/Handson-A",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Conceptual Labs(in progress)</h2>
        <div className="project-grid">
          {labs.map((p, i) => (
            <article key={i} className="project-card">
              <h3>{p.title}</h3>
              <p className="project-stack">Stack: {p.stack}</p>
              <p className="project-desc">{p.summary}</p>
              <a href={p.repo} target="_blank" rel="noreferrer" className="repo-link">
                <FaGithub /> <span>Explore Repository?</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
