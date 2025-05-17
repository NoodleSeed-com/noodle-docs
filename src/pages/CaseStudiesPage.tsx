import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import "./caseStudies.css";

const CaseStudiesPage = () => {
  return (
    <div className="doc-container">
      <h1 className="page-title">Case Studies</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
        Discover articles, tutorials, and insights about Noodle Seed.
      </p>
      
      <div className="content-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "2rem" 
      }}>
        {caseStudies.map((article) => (
          <Link 
            key={article.id} 
            to={`/case-studies/${article.id}`} 
            className="case-study-card" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img 
              src={`https://www.noodleseed.com/api/image?q=abstract tech background`} 
              alt={article.title} 
              className="case-study-image"
            />
            <div className="case-study-card-content">
              <h2 className="case-study-title">{article.title}</h2>
              <p className="case-study-excerpt">{article.excerpt}</p>
              <div className="case-study-meta">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
