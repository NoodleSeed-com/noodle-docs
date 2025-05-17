import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import "./caseStudies.css";

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudyId = parseInt(id || "0");
  const [activeSection, setActiveSection] = useState<string>("");
  const headingRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
  
  // Find the case study with the matching ID
  const caseStudy = caseStudies.find(article => article.id === caseStudyId);
  
  // Generate table of contents from headings
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);
  
  // Extract headings from case study content when it loads
  useEffect(() => {
    if (caseStudy?.content) {
      // We'll populate this in the next render after the content is loaded
      setTimeout(() => {
        const headings = document.querySelectorAll('.case-study-content-wrapper h2');
        const toc: { id: string; text: string }[] = [];
        
        headings.forEach((heading, index) => {
          const h2 = heading as HTMLHeadingElement;
          const id = `heading-${index}`;
          h2.id = id;
          toc.push({ id, text: h2.textContent || `Section ${index + 1}` });
        });
        
        setTableOfContents(toc);
      }, 100);
    }
  }, [caseStudy]);
  
  // Set up intersection observer to track which section is in view
  useEffect(() => {
    if (tableOfContents.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-100px 0px -80% 0px' }
      );
      
      tableOfContents.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
      
      return () => {
        tableOfContents.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) observer.unobserve(element);
        });
      };
    }
  }, [tableOfContents]);
  
  // Handle clicking on a TOC item
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  // If no matching case study is found, show a message
  if (!caseStudy) {
    return (
      <div className="doc-container">
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h1 className="page-title">Case Study Not Found</h1>
          <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/case-studies" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="doc-container">
      <div style={{ marginBottom: "2rem" }}>
        <Link to="/case-studies" style={{ color: "var(--color-primary)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          ← Back to Case Studies
        </Link>
      </div>
      
      <div className="case-study-layout">
        {/* Left Column - Other Case Studies */}
        <div className="case-study-nav">
          <h3 className="case-study-nav-title">More Case Studies</h3>
          <ul className="case-study-nav-list">
            {caseStudies.map((article) => (
              <li key={article.id} className="case-study-nav-item">
                <Link 
                  to={`/case-studies/${article.id}`} 
                  className={`case-study-nav-link ${article.id === caseStudyId ? 'active' : ''}`}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Middle Column - Content */}
        <div className="case-study-content">
          {/* If the case study has custom content, render it */}
          {caseStudy.content ? (
            <article className="case-study-post">
              {caseStudy.content}
            </article>
          ) : (
            /* Otherwise, render a default layout */
            <article className="case-study-post">
              <h1 className="page-title">{caseStudy.title}</h1>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-secondary)", marginBottom: "2rem" }}>
                <span>{caseStudy.author}</span>
                <span>{caseStudy.date}</span>
              </div>
              <p>{caseStudy.excerpt}</p>
              <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--color-muted)", borderRadius: "0.5rem", textAlign: "center" }}>
                <p>Full content coming soon!</p>
              </div>
            </article>
          )}
        </div>
        
        {/* Right Column - Table of Contents */}
        <div className="case-study-toc">
          <h3 className="case-study-toc-title">Table of Contents</h3>
          {tableOfContents.length > 0 ? (
            <ul className="case-study-toc-list">
              {tableOfContents.map((item) => (
                <li 
                  key={item.id} 
                  className={`case-study-toc-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="case-study-toc-empty">No sections available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
