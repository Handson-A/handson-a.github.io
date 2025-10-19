import React from "react";
import { FaLaptopCode, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";

const groups = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    skills: [
      { name: "React", desc: "Component-based JavaScript library for building dynamic user interfaces" },
      { name: "JavaScript / TypeScript", desc: "Core web programming languages with type safety capabilities" },
      { name: "Node.js / Express", desc: "Server-side JavaScript runtime and minimalist web framework" },
      { name: "RESTful APIs", desc: "Architectural style for scalable web services and data exchange" },
      { name: "Pure CSS", desc: "Styling web pages without frameworks, using modern CSS features" },
      { name: "HTML5", desc: "Latest markup standard for structuring web content" },
    ],
  },
  {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
    skills: [
      { name: "Penetration Testing", desc: "Simulating attacks to identify security weaknesses" },
      { name: "OWASP Top 10", desc: "Critical web application security risks and mitigation strategies" },
      { name: "Vulnerability Scanning", desc: "Automated detection of security flaws in systems and applications" },
      { name: "Linux (Kali)", desc: "Security-focused Linux distribution for ethical hacking and testing" },
      { name: "Defensive Coding", desc: "Writing code that anticipates and prevents security exploits" },
      { name: "Nmap", desc: "Network mapping and port scanning tool for security audits" },
    ],
  },
  {
    title: "QA & Testing",
    icon: <FaClipboardCheck />,
    skills: [
      { name: "Test Automation", desc: "Automating repetitive testing tasks for efficiency and reliability" },
      { name: "Cypress / Selenium", desc: "End-to-end testing frameworks for web applications" },
      { name: "Unit Testing (Jest)", desc: "Testing individual code units in isolation for correctness" },
      { name: "CI/CD Pipelines", desc: "Continuous integration and deployment for automated quality checks" },
      { name: "Exploratory Testing", desc: "Manual testing to discover unexpected behaviors and edge cases" },
      { name: "API Testing", desc: "Validating API endpoints, responses, and data integrity" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-cards">
          {groups.map((g, i) => (
            <div key={i} className="skills-card">
              <div className="skills-card-head">
                <div className="skills-icon">{g.icon}</div>
                <h3>{g.title}</h3>
              </div>
              <div className="badges">
                {g.skills.map((s, j) => (
                  <span key={j} className="badge" title={s.desc}>{s.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;