import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="doc-container">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 className="page-title" style={{ fontSize: "2.5rem" }}>Noodle Seed Documentation</h1>
        <p style={{ fontSize: "1.25rem", color: "var(--color-secondary)" }}>
          Welcome to the official documentation for Noodle Seed, the AI-powered code generation platform.
        </p>
      </div>
      
      <div className="content-grid">
        <div className="card card-highlight">
          <h2 className="section-title">Get Started</h2>
          <p style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>
            New to Noodle Seed? Start here to learn the basics and set up your first project.
          </p>
          <Link to="/academy" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            Learn more →
          </Link>
        </div>
        
        <div className="card card-highlight">
          <h2 className="section-title">Latest Updates</h2>
          <p style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>
            Stay up to date with the latest features, improvements, and fixes in Noodle Seed.
          </p>
          <Link to="/changelog" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            View changelog →
          </Link>
        </div>
      </div>
      
      <div className="content-grid" style={{ marginTop: "2rem" }}>
        <div className="card card-highlight">
          <h2 className="section-title">Case Studies</h2>
          <p style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>
            Discover tips, tutorials, and best practices for using Noodle Seed effectively.
          </p>
          <Link to="/case-studies" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            Explore case studies →
          </Link>
        </div>
        
        <div className="card card-highlight">
          <h2 className="section-title">Project Gallery</h2>
          <p style={{ marginBottom: "1rem", color: "var(--color-secondary)" }}>
            Explore Hassan's HR Interface, FlexiClean, and other showcase projects built with Noodle Seed.
          </p>
          <div style={{ 
            backgroundColor: "var(--color-muted)", 
            padding: "1rem", 
            borderRadius: "0.5rem", 
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
            color: "var(--color-secondary)",
            fontSize: "0.9rem"
          }}>
            Gallery coming soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
