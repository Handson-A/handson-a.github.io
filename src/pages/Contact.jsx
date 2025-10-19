import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact</h2>
                <p className="contact-lead">I'm open to opportunities in Software Development, Cyber Security and QA. Reach out and let's discuss how I can help your team.</p>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-card-head">
                            <FaEnvelope className="contact-icon" />
                            <h3>Email</h3>
                        </div>
                        <a href="mailto:ayelgumhandson001@gmail.com" className="contact-email">ayelgumhandson001@gmail.com</a>
                        <p className="contact-note">Prefer email for initial contact. I aim to reply within 48 hours.</p>
                    </div>

                    <aside className="contact-socials">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com/Handson-A" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub /> <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/ayelson" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin /> <span>LinkedIn</span>
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}