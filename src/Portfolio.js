import React from "react";

export default function Portfolio() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Hi, I'm Nayana 👋</h1>
        <p>
            I am a Computer Science graduate from Newcastle University with a passion for 
            building full-stack applications and solving data-driven problems.
        </p>
        <p>
            I enjoy working at the intersection of web, cloud, and data — using Python, 
            FastAPI, React, and GCP to create scalable, impactful solutions.
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
            title="Sound Event Detection - Data Science"
            description={`• Designed lightweight SED models (CNN, CRNN, Transformer) using UrbanSound8K dataset.
                          • CRNN achieved best accuracy (≈90%) with minimal parameters (175K), optimal for edge devices.
                          • Conducted trade-off analysis: accuracy vs. computational cost (memory, GFLOPs) for each model.
                          • Addressed real-world deployment: energy efficiency, interpretability, and real-time responsiveness.`}
            techStack="Python, CNN, CRNN, Transformer, UrbanSound8K, Lightweight Deep Learning"
          />
          <ProjectCard
            title="Secure Chat System - Security and Resilience"
            description={`• Developed a secure, real-time chat app using FastAPI, WebSockets, PostgreSQL, Redis, Docker Compose, Prometheus, ReactJS.
                          • Implemented end-to-end encryption, secure file sharing, JWT authentication, and OAuth2 login.
                          • Achieved modular deployment with Docker Compose; Prometheus used for real-time monitoring.
                          • Demonstrated robustness under concurrent load; identified optimization needs for high concurrency.`}
            techStack="FastAPI, WebSockets, PostgreSQL, Redis, Docker Compose, Prometheus, ReactJS, JWT, OAuth2"
          />
          <ProjectCard
            title="Political Bias Detection"
            description={`• Built a sentiment analysis system to detect political bias using Twitter data and NLP techniques.
                          • Applied Naive Bayes, KNN, and SVM classifiers on unigram features; classified tweets into positive, negative, neutral.
                          • Executed extensive tweet preprocessing (normalization, stopword removal, token reduction) for model training.
                          • Utilized supervised learning and visualization to predict public sentiment towards Indian political parties.`}
            techStack="Python, NLP, Sentiment Analysis, Naive Bayes, SVM, KNN, Tweepy, Text Preprocessing"
          />
          <ProjectCard
            title="Backlog Manager – Android App"
            description={`• Developed an Android app to streamline backlog tracking for students and faculty using Firebase backend.
                          • Implemented modular roles: Admin manages users and subjects, Faculty uploads assignments and quizzes, Students view activity.
                          • Used XML for frontend and Firebase for real-time database; supported multi-user login and assignment management.
                          • Enhanced communication, reduced manual efforts, and optimized backlog process transparency in academic workflows.`}
            techStack="Android Studio, XML, Firebase, Mobile App Development, Firebase Realtime DB"
          />
          <ProjectCard
            title="Inventory Management System - DBMS"
            description={`• Built a desktop-based inventory system using .NET and SQLite to manage stock, sales, and purchases efficiently.
                          • Implemented admin/employee roles for adding, editing, and managing categories, products, brands, and orders.
                          • Automated stock tracking and order processing, reducing manual errors and improving operational visibility.
                          • Used HTML for frontend and MySQL for backend; incorporated data validation, schema design, and functional testing. `}
            techStack="HTML, CSS, MySQL, SQLite, .NET, Visual Studio, SQL Queries, Inventory Management"
          />
          <ProjectCard
            title="Music Library - Object-Oriented Programming"
            description={`• Engineered a Java-based digital music library with CRUD functionalities for artists, albums, and tracks.
                          • Implemented classes for compilation albums, JSON-based data input, and track search/rating analysis.
                          • Enabled album-level analytics (file size, duration, rating) and advanced track filtering features.
                          • Demonstrated principles of OOP: encapsulation, inheritance (e.g., CompilationAlbum), and modular design.`}
            techStack="Java, OOP, JSON, Compilation Album, Track Analytics"
          />
          <ProjectCard
            title="Scalable Kubernetes-based Web Application with Observability on Azure - Cloud Computing"
            description={`• Deployed Kubernetes-based web app and dashboard on Azure; configured NodePort for access.
                          • Built and integrated a Dockerized load generator for benchmarking web applications.
                          • Implemented full observability stack (Prometheus, Metrics Server, Grafana); real-time CPU/memory insights.
                          • Enabled local image registry and load-tested services with real-time Grafana monitoring.`}
            techStack="Kubernetes, Docker, Azure, Prometheus, Grafana, Microk8s, NodePort, Load Generator (Python)"
          />
          <ProjectCard
            title="Smart Urban Air Quality Monitoring and Prediction System - IOT"
            description={`• Built a 3-tier IoT architecture (Edge, Cloud, IoT) using real-world PM2.5 data from Newcastle Urban Observatory.
                          • Developed Docker-based edge services for data injection, preprocessing, and asynchronous MQTT-based communication.
                          • Implemented machine learning prediction and real-time data visualization pipeline using RabbitMQ and cloud-based services.
                          • Designed efficient data cleaning, reformatting, and aggregation workflows to enable smart urban insights.`}
            techStack="Python, Docker, MQTT (EMQX), RabbitMQ, Machine Learning, JSON, Azure, Visualization tools"
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
