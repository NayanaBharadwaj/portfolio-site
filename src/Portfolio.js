import React from "react";

export default function Portfolio() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Hi, I'm Nayana 👋</h1>
        <p>
          Computer Science graduate from Newcastle University passionate about
          building full-stack applications and data-driven solutions.
        </p>
        <p>
          I work at the intersection of web, cloud, and data — using Python,
          FastAPI, React, and GCP to build scalable solutions.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a href="#projects" style={{ marginRight: "1rem" }}>View My Projects</a>
          <a href="mailto:nayana03.bharadwaj@gmail.com" style={{ marginRight: "1rem" }}>Contact Me</a>
          <a href="https://www.linkedin.com/in/nayana-a-d-06761614a/">LinkedIn</a>
        </div>
      </section>

      <section id="projects">
        <h2 style={{ textAlign: "center" }}>Featured Projects</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr" }}>
          <ProjectCard
            title="Sound Event Detection"
            description="Lightweight Transformer-based model for real-time sound detection on edge devices."
            techStack="Python, CNN, CRNN, Transformer"
          />
          <ProjectCard
            title="Secure Chat System"
            description="Encrypted real-time chat application with FastAPI and WebSockets."
            techStack="FastAPI, PostgreSQL, Redis, JWT"
          />
          <ProjectCard
            title="Political Bias Detection"
            description="ML-based analysis of tweets to classify political tendencies."
            techStack="Python, MySQL, ML"
          />
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, techStack }) {
  return (
    <div style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontStyle: "italic", color: "#555" }}>Tech: {techStack}</p>
    </div>
  );
}
