import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import { changelogEntries } from "../../data/changelog";
import "./sidebar.css";

// Define the documentation sections for Academy
const academyNavItems = [
  {
    id: "getting-started",
    title: "Getting Started",
    subsections: [
      { id: "installation", title: "Installation" },
      { id: "quickstart", title: "Quickstart Guide" },
      { id: "setup", title: "Initial Setup" }
    ]
  },
  {
    id: "documentation",
    title: "Documentation",
    subsections: [
      { id: "api-reference", title: "API Reference" },
      { id: "components", title: "Components" },
      { id: "configuration", title: "Configuration Options" }
    ]
  },
  {
    id: "noodle-101",
    title: "Noodle 101",
    subsections: [
      { id: "core-concepts", title: "Core Concepts" },
      { id: "architecture", title: "Architecture" },
      { id: "key-features", title: "Key Features" }
    ]
  },
  {
    id: "how-to-guides",
    title: "How-to Guides",
    subsections: [
      { id: "common-tasks", title: "Common Tasks" },
      { id: "integrations", title: "Integrations" },
      { id: "troubleshooting", title: "Troubleshooting" }
    ]
  },
  {
    id: "best-practices",
    title: "Best Practices",
    subsections: [
      { id: "optimization", title: "Optimization Tips" },
      { id: "patterns", title: "Design Patterns" },
      { id: "security", title: "Security Guidelines" }
    ]
  }
];

// Filter case studies to only include FlexiClean and Advanced Techniques
const filteredCaseStudies = caseStudies.filter(article => 
  article.title.includes("FlexiClean") || article.title.includes("Advanced")
);

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  // Determine which main section is active based on the current path
  const isAcademyActive = location.pathname.includes("academy");
  const isChangelogActive = location.pathname.includes("changelog");
  const isCaseStudiesActive = location.pathname.includes("case-studies");
  
  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };
  
  // Check if a section is expanded
  const isSectionExpanded = (sectionId: string) => {
    return expandedSections.includes(sectionId);
  };
  
  return (
    <aside className="unified-sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Documentation</h3>
        
        {/* Academy Section */}
        <div className="sidebar-category">
          <div 
            className={`sidebar-category-title ${isAcademyActive ? 'active' : ''}`}
            onClick={() => toggleSection('academy')}
          >
            <span>Academy</span>
            <span className="sidebar-toggle-icon">
              {isSectionExpanded('academy') ? '▼' : '▶'}
            </span>
          </div>
          
          {isSectionExpanded('academy') && (
            <ul className="sidebar-subcategory-list">
              {academyNavItems.map((section) => (
                <li key={section.id} className="sidebar-subcategory">
                  <div 
                    className="sidebar-subcategory-title"
                    onClick={() => toggleSection(`academy-${section.id}`)}
                  >
                    <span>{section.title}</span>
                    <span className="sidebar-toggle-icon">
                      {isSectionExpanded(`academy-${section.id}`) ? '▼' : '▶'}
                    </span>
                  </div>
                  
                  {isSectionExpanded(`academy-${section.id}`) && (
                    <ul className="sidebar-item-list">
                      {section.subsections.map((subsection) => (
                        <li key={subsection.id} className="sidebar-item">
                          <Link 
                            to={`/academy?section=${section.id}&subsection=${subsection.id}`}
                            className="sidebar-link"
                          >
                            {subsection.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Changelog Section */}
        <div className="sidebar-category">
          <div 
            className={`sidebar-category-title ${isChangelogActive ? 'active' : ''}`}
            onClick={() => toggleSection('changelog')}
          >
            <span>Changelog</span>
            <span className="sidebar-toggle-icon">
              {isSectionExpanded('changelog') ? '▼' : '▶'}
            </span>
          </div>
          
          {isSectionExpanded('changelog') && (
            <ul className="sidebar-item-list">
              {changelogEntries.map((entry) => (
                <li key={entry.id} className="sidebar-item">
                  <Link 
                    to={`/changelog#changelog-${entry.id}`}
                    className="sidebar-link"
                  >
                    {entry.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Case Studies Section */}
        <div className="sidebar-category">
          <div 
            className={`sidebar-category-title ${isCaseStudiesActive ? 'active' : ''}`}
            onClick={() => toggleSection('case-studies')}
          >
            <span>Case Studies</span>
            <span className="sidebar-toggle-icon">
              {isSectionExpanded('case-studies') ? '▼' : '▶'}
            </span>
          </div>
          
          {isSectionExpanded('case-studies') && (
            <ul className="sidebar-item-list">
              {filteredCaseStudies.map((article) => (
                <li key={article.id} className="sidebar-item">
                  <Link 
                    to={`/case-studies/${article.id}`}
                    className="sidebar-link"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
