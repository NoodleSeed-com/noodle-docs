import React, { useState, useEffect, useRef } from "react";
import { changelogEntries, ChangelogEntry } from "../data/changelog";
import { Link } from "react-router-dom";
import "./changelog.css";

const ChangelogPage = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Generate navigation items for the left sidebar
  const navItems = [
    { id: 'changelog', label: 'Changelog', href: '/changelog' },
  ];
  
  // Set up intersection observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '1');
            setActiveSection(id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );
    
    entryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      entryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  // Handle clicking on a TOC item
  const scrollToSection = (id: number) => {
    setActiveSection(id);
    entryRefs.current[id - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className="doc-container">
      <h1 className="page-title">🍜 Changelog: Noodle's Journey</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
        Track Noodle Seed's growth and evolution with our detailed release history.
      </p>
      
      <div className="changelog-layout">
        {/* Left Column - Navigation */}
        <div className="changelog-nav">
          <h3 className="changelog-nav-title">Documentation</h3>
          <ul className="changelog-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="changelog-nav-item">
                <Link 
                  to={item.href} 
                  className={`changelog-nav-link ${item.id === 'changelog' ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Middle Column - Content */}
        <div className="changelog-content">
          {changelogEntries.map((entry, index) => (
            <div 
              key={entry.id} 
              className="changelog-entry"
              ref={el => entryRefs.current[index] = el}
              data-id={entry.id}
              id={`changelog-${entry.id}`}
            >
              <div className="changelog-header">
                <h2 className="changelog-title">{entry.title}</h2>
                <span className="changelog-date">{new Date(entry.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <p className="changelog-description">{entry.description}</p>
              
              {entry.features && entry.features.length > 0 && (
                <div className="changelog-section">
                  <h3 className="changelog-section-title">✨ New Features</h3>
                  <ul className="changelog-list">
                    {entry.features.map((feature, index) => (
                      <li key={index} className="changelog-list-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {entry.improvements && entry.improvements.length > 0 && (
                <div className="changelog-section">
                  <h3 className="changelog-section-title">🔧 Improvements & Bug Fixes</h3>
                  <ul className="changelog-list">
                    {entry.improvements.map((improvement, index) => (
                      <li key={index} className="changelog-list-item">{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Column - Timeline */}
        <div className="changelog-toc">
          <h3 className="changelog-toc-title">Release Timeline</h3>
          <div className="changelog-timeline">
            {changelogEntries.map((entry) => (
              <div 
                key={entry.id} 
                className={`changelog-timeline-item ${activeSection === entry.id ? 'active' : ''}`}
                onClick={() => scrollToSection(entry.id)}
              >
                <div className="changelog-timeline-date">
                  <div className="changelog-timeline-month-day">
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="changelog-timeline-year">
                    {new Date(entry.date).getFullYear()}
                  </div>
                </div>
                <div className="changelog-timeline-connector">
                  <div className="changelog-timeline-dot"></div>
                  <div className="changelog-timeline-line"></div>
                </div>
                <div className="changelog-timeline-content">
                  {entry.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPage;
