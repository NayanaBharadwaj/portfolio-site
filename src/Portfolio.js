import React from "react";

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Nayana supported us with detailed documentation and KT even while unwell. Her transition efforts and clarity saved the team during a critical recovery phase.",
      author: "Project Lead, Infosys"
    },
    {
      quote: "You clarified and rebuilt OSO’s core process with precision. This was the most unstable area — and now it’s one of our most reliable. Thank you.",
      author: "Global Client, Japan"
    },
    {
      quote: "You are one of the upcoming emerging leaders. Great to see your work reinstating client confidence.",
      author: "Senior Manager, Infosys"
    },
    {
      quote: "Hardworking, cheerful, and always learning — Nayana gave 100% on every task. Even the clients noticed her commitment.",
      author: "Senior Consultant, Infosys"
    }
  ];

  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ textAlign: "center", margin: "3rem 0", background: "#f4f8ff", padding: "2rem 1rem", borderRadius: "12px" }}>
      <h2>What Others Say</h2>
      <div style={cardStyle}>
        <p style={{ fontStyle: "italic" }}>"{testimonials[index].quote}"</p>
        <p style={{ color: "#555" }}>— {testimonials[index].author}</p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={prev} style={navBtnStyle}>⟨</button>
        <button onClick={next} style={navBtnStyle}>⟩</button>
      </div>
    </section>
  );
}

const cardStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const navBtnStyle = {
  background: "#eee",
  border: "none",
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  borderRadius: "5px"
};

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
      <section id="experience" style={{ marginBottom: "2rem" }}>
  <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Professional Experience</h2>

  <div style={{ marginBottom: "1.5rem" }}>
    <h3>Systems Engineer – Infosys Ltd., Mysore, India</h3>
    <p><em>June 2021 – September 2022</em></p>
    <ul>
      <li>Developed and deployed a Python-based sales information platform on GCP, reducing report generation time by 30% and improving data access efficiency.</li>
      <li>Analysed internal datasets using SQL and HQL to identify process bottlenecks, contributing to optimised reporting and decision-making systems.</li>
      <li>Collaborated within agile teams to design and deliver modular backend solutions that improved system performance and reporting accuracy.</li>
    </ul>
  </div>

  <div>
    <h3>Web Development Intern – Invenger Technologies, Mangalore, India</h3>
    <p><em>June 2019 – July 2019</em></p>
    <ul>
      <li>Built a functional job portal using Java, Bootstrap, HTML/CSS, and PostgreSQL with a focus on accessibility and secure user interactions.</li>
      <li>Designed front-end interfaces and implemented backend CRUD operations to streamline user navigation and data handling.</li>
    </ul>
  </div>
</section>

<TestimonialCarousel />

      <section id="projects">
        <h2 style={{ textAlign: "center" }}>Featured Projects</h2>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr" }}>
          <ProjectCard 
           title="Sound Event Detection - Data Science"
           techStack="Python, CNN, CRNN, Transformer, UrbanSound8K, Lightweight Deep Learning"
           description={
          <p>
           • Designed lightweight SED models (CNN, CRNN, Transformer) using UrbanSound8K dataset.<br />
           • CRNN achieved best accuracy (≈90%) with minimal parameters (175K), optimal for edge devices.<br />
           • Conducted trade-off analysis: accuracy vs. computational cost (memory, GFLOPs) for each model.<br />
           • Addressed real-world deployment: energy efficiency, interpretability, and real-time responsiveness.
          </p>
          }
          />
          <ProjectCard
            title="Secure Chat System - Security and Resilience"
            description={
              <p>
              • Developed a secure, real-time chat app using FastAPI, WebSockets, PostgreSQL, Redis, Docker Compose, Prometheus, ReactJS.<br />
              • Implemented end-to-end encryption, secure file sharing, JWT authentication, and OAuth2 login.<br />
              • Achieved modular deployment with Docker Compose; Prometheus used for real-time monitoring.<br />
              • Demonstrated robustness under concurrent load; identified optimization needs for high concurrency.
              </p>
            }
            techStack="FastAPI, WebSockets, PostgreSQL, Redis, Docker Compose, Prometheus, ReactJS, JWT, OAuth2"
          />
          <ProjectCard
            title="Political Bias Detection"
            description={
              <p>
              • Built a sentiment analysis system to detect political bias using Twitter data and NLP techniques.<br />
              • Applied Naive Bayes, KNN, and SVM classifiers on unigram features; classified tweets into positive, negative, neutral.<br />
              • Executed extensive tweet preprocessing (normalization, stopword removal, token reduction) for model training.<br />
              • Utilized supervised learning and visualization to predict public sentiment towards Indian political parties.
              </p>
            }
            techStack="Python, NLP, Sentiment Analysis, Naive Bayes, SVM, KNN, Tweepy, Text Preprocessing"
          />
          <ProjectCard
            title="Backlog Manager – Android App"
            description={
              <p>
              • Developed an Android app to streamline backlog tracking for students and faculty using Firebase backend.<br />
              • Implemented modular roles: Admin manages users and subjects, Faculty uploads assignments and quizzes, Students view activity.<br />
              • Used XML for frontend and Firebase for real-time database; supported multi-user login and assignment management.<br />
              • Enhanced communication, reduced manual efforts, and optimized backlog process transparency in academic workflows.
              </p>
              }
            techStack="Android Studio, XML, Firebase, Mobile App Development, Firebase Realtime DB"
          />
          <ProjectCard
            title="Inventory Management System - DBMS"
            description={
              <p>
              • Built a desktop-based inventory system using .NET and SQLite to manage stock, sales, and purchases efficiently.<br />
              • Implemented admin/employee roles for adding, editing, and managing categories, products, brands, and orders.<br />
              • Automated stock tracking and order processing, reducing manual errors and improving operational visibility.<br />
              • Used HTML for frontend and MySQL for backend; incorporated data validation, schema design, and functional testing. 
              </p>
              }
            techStack="HTML, CSS, MySQL, SQLite, .NET, Visual Studio, SQL Queries, Inventory Management"
          />
          <ProjectCard
            title="Music Library - Object-Oriented Programming"
            description={
              <p>
              • Engineered a Java-based digital music library with CRUD functionalities for artists, albums, and tracks.<br />
              • Implemented classes for compilation albums, JSON-based data input, and track search/rating analysis.<br />
              • Enabled album-level analytics (file size, duration, rating) and advanced track filtering features.<br />
              • Demonstrated principles of OOP: encapsulation, inheritance (e.g., CompilationAlbum), and modular design.
              </p>
              }
            techStack="Java, OOP, JSON, Compilation Album, Track Analytics"
          />
          <ProjectCard
            title="Scalable Kubernetes-based Web Application with Observability on Azure - Cloud Computing"
            description={
              <p>
              • Deployed Kubernetes-based web app and dashboard on Azure; configured NodePort for access.<br />
              • Built and integrated a Dockerized load generator for benchmarking web applications.<br />
              • Implemented full observability stack (Prometheus, Metrics Server, Grafana); real-time CPU/memory insights.<br />
              • Enabled local image registry and load-tested services with real-time Grafana monitoring.
              </p>
              }
            techStack="Kubernetes, Docker, Azure, Prometheus, Grafana, Microk8s, NodePort, Load Generator (Python)"
          />
          <ProjectCard
            title="Smart Urban Air Quality Monitoring and Prediction System - IOT"
            description={
              <p>
              • Built a 3-tier IoT architecture (Edge, Cloud, IoT) using real-world PM2.5 data from Newcastle Urban Observatory.<br />
              • Developed Docker-based edge services for data injection, preprocessing, and asynchronous MQTT-based communication.<br />
              • Implemented machine learning prediction and real-time data visualization pipeline using RabbitMQ and cloud-based services.<br />
              • Designed efficient data cleaning, reformatting, and aggregation workflows to enable smart urban insights.
              </p>
              }
            techStack="Python, Docker, MQTT (EMQX), RabbitMQ, Machine Learning, JSON, Azure, Visualization tools"
          />
        </div>
      </section>
              
    <section>
    <h2>Education</h2>
    <p><strong>MSc in Advanced Computer Science</strong><br />Newcastle University, UK — Nov 2024</p>
    <p><strong>B.E. in Information Science</strong><br />Malnad College of Engineering, India — Oct 2020</p>
   </section>

    <a href="/Nayana%20Agrahara%20Dattatri.pdf" target="_blank" style={{ marginRight: "1rem" }}>
    Download My Resume
    </a>

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
