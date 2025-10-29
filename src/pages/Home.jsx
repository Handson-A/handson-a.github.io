import React from "react";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h1 className="hero-title">Handson Ayelgum</h1>
          <h2 className="hero-role">Web & Software Developer | Cyber Security Analyst | QA Specialist</h2>
          <p className="hero-tagline">
            A versatile developer bridging the gap between development, robust security, and quality assurance to build resilient, reliable, and quality softwares.
          </p>

          <div classNaCV="hero-actions">
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
            <a href="/CV.pdf" className="btn btn-outline" download>View CV</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <img
            src={profileImg}
            alt="Handson Ayelgum"
            className="hero-img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              const svg = `<?xml version='1.0' encoding='UTF-8'?>\n<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>\n  <rect width='100%' height='100%' rx='12' fill='#0f3b36'/>\n  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='48' fill='#bdeae3'>HA</text>\n</svg>`;
              e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
            }}
          />
        </div>
      </div>
    </section>
  );
}
