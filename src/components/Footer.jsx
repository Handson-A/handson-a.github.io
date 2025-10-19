import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Handson Ayelgum</p>
        <p className="footer-sub">Building secure, reliable and testable software.</p>
        <div className="footer-social">
          <a href="https://github.com/Handson-A" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayelson" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
