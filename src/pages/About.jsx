import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About</h2>
        <p className="about-lead">
          As a dedicated student at the <strong>University of Ghana</strong>, my focus is on mastering the complete software lifecycle. I view development, security, and quality assurance not as separate subjects, but as interconnected disciplines essential for modern software projects. I apply my theoretical knowledge immediately, striving to build applications that are inherently stable and reliable.
        </p>
        <p className="about-lead">
          I challenge myself to go beyond basic functionality. When building projects, I proactively implement <strong>test automation plans</strong> using frameworks like Cypress and Jest. My goal is to transition from university with a portfolio demonstrating not just the ability to code, but the ability to deliver secure, production-ready quality.
        </p>

        <div className="value-cards">
          <div className="value-card">
            <h3>Value Proposition</h3>
            <ul>
              <li><FaCheckCircle className="icon-check"/> <strong>Applied Academics:</strong> Transforming complex university coursework into robust, real-world coding and testing practices.</li>
              <li><FaCheckCircle className="icon-check"/> <strong>Security-Minded Development:</strong> Proactively identifying and mitigating common web vulnerabilities during the build phase.</li>
              <li><FaCheckCircle className="icon-check"/> <strong>Full-Stack Proficiency:</strong> Demonstrating hands-on skill in both responsive Frontend (React) and robust Backend services.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
