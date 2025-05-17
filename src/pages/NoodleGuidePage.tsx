import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./noodleguide.css";

// Define the documentation sections
const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    subsections: [
      { id: "introduction", title: "Introduction" }
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
    id: "best-practices",
    title: "Best Practices",
    subsections: [
      { id: "optimization", title: "Optimization Tips" },
      { id: "patterns", title: "Design Patterns" },
      { id: "security", title: "Security Guidelines" }
    ]
  }
];

const NoodleGuidePage = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [activeSubsection, setActiveSubsection] = useState("introduction");
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Function to handle section navigation
  const navigateToSection = (sectionId: string, subsectionId: string) => {
    setActiveSection(sectionId);
    setActiveSubsection(subsectionId);
    
    // Scroll to top of content when changing sections
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };
  
  // Function to scroll to element by ID
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Get the active section and subsection
  const currentSection = docSections.find(section => section.id === activeSection);
  const currentSubsection = currentSection?.subsections.find(subsection => subsection.id === activeSubsection);
  
  return (
    <div className="doc-container">
      <h1 className="page-title">Academy</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
        Comprehensive documentation, tutorials, and best practices for Noodle Seed.
      </p>
      
      <div className="guide-layout">
        {/* Left Column - Navigation */}
        <div className="guide-nav">
          <h3 className="guide-nav-title">Documentation</h3>
          <ul className="guide-nav-list">
            {docSections.map((section) => (
              <li key={section.id} className="guide-nav-section">
                <div 
                  className={`guide-nav-section-title ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => navigateToSection(section.id, section.subsections[0].id)}
                >
                  {section.title}
                </div>
                {activeSection === section.id && (
                  <ul className="guide-nav-subsection-list">
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id} className="guide-nav-subsection">
                        <div 
                          className={`guide-nav-link ${activeSubsection === subsection.id ? 'active' : ''}`}
                          onClick={() => navigateToSection(section.id, subsection.id)}
                        >
                          {subsection.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Middle Column - Content */}
        <div className="guide-content" ref={contentRef}>
          <div className="guide-content-header">
            <h2 className="guide-content-title">{currentSubsection?.title}</h2>
            <div className="guide-content-breadcrumb">
              <span>{currentSection?.title}</span>
              <span> / </span>
              <span>{currentSubsection?.title}</span>
            </div>
          </div>
          
          <div className="guide-content-body">
            {/* Getting Started - Introduction */}
            {activeSection === "getting-started" && activeSubsection === "introduction" && (
              <div>
                <h3 id="intro-getting-started">Getting Started</h3>
                <p>
                  Welcome to NoodleSeed! We're excited to help you transform your ideas into working applications through the power of natural language and AI-assisted development.
                </p>
                
                <h4 id="intro-what-is-noodleseed">What is NoodleSeed?</h4>
                <p>
                  NoodleSeed is an innovative platform that lets you create fully functional applications by describing them in plain English. Our AI-powered system understands your requirements and generates the necessary code, allowing developers and non-developers alike to bring their ideas to life quickly and efficiently.
                </p>
                
                <h4 id="intro-system-requirements">System Requirements</h4>
                <ul>
                  <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>Internet connection</li>
                  <li>For desktop application: Windows 10+, macOS 10.14+, or Linux</li>
                </ul>
                
                <h4 id="intro-creating-first-app">Creating Your First Application</h4>
                <p>
                  Follow these steps to create your first application with NoodleSeed:
                </p>
                <ol>
                  <li><strong>Sign up for an account</strong> - Create your NoodleSeed account to access our suite of AI-powered tools.</li>
                  <li><strong>Start by describing your application's purpose and core functionality</strong> in natural language.</li>
                  <li><strong>Use Noodle Spark</strong> to refine the details through conversation with the AI assistant.</li>
                  <li><strong>Review the generated code</strong> and make adjustments as needed.</li>
                  <li><strong>Test your application</strong> directly within the NoodleSeed environment.</li>
                  <li><strong>Deploy to your platform of choice</strong> when ready.</li>
                </ol>
                
                <h4 id="intro-effective-prompting">Tips for Effective Prompting</h4>
                <p>
                  The more details you provide about your desired application, the better the results. However, you don't need to use technical jargon—just explain what you want in clear terms.
                </p>
                
                <div style={{ 
                  backgroundColor: "var(--color-muted)", 
                  padding: "1.5rem", 
                  borderRadius: "0.5rem", 
                  marginTop: "1.5rem" 
                }}>
                  <p>
                    <strong>Ready to dive deeper?</strong> Check out our <a href="/case-studies/5" style={{ color: "var(--color-primary)" }}>Expert Guide</a> based on Hassan's projects to learn advanced techniques for efficient development with NoodleSeed.
                  </p>
                </div>
              </div>
            )}
            
            {/* Noodle 101 - Core Concepts */}
            {activeSection === "noodle-101" && activeSubsection === "core-concepts" && (
              <div>
                <h3 id="noodle101-heading">Noodle 101</h3>
                <h4 id="noodle101-core-concepts">Core Concepts:</h4>
                
                <h5 id="noodle101-projects">Noodle Projects</h5>
                <p>
                  Projects are the foundation of your work in NoodleSeed. Each project represents an application or feature you're building, complete with its own codebase, resources, and configurations.
                </p>
                
                <h5 id="noodle101-spark">Noodle Spark</h5>
                <p>
                  Our front-end interface where you interact with the AI assistant to describe, build, and refine your applications. Spark translates your natural language descriptions into functional code.
                </p>
                
                <h5 id="noodle101-concierge">Noodle Concierge</h5>
                <p>
                  Your AI development partner that guides you through the app creation process, offering suggestions, answering questions, and helping troubleshoot issues.
                </p>
                
                <h5 id="noodle101-memory">Noodle Memory</h5>
                <p>
                  The system that retains context about your projects, preferences, and past interactions, enabling more personalized and effective assistance over time.
                </p>
                
                <h4 id="noodle101-key-features">Key Features:</h4>
                <ul>
                  <li><strong>Natural Language App Creation</strong> - Describe your application in plain English and watch as code is generated for you.</li>
                  <li><strong>Multi-Platform Support</strong> - Build applications for web, mobile, and desktop environments from a single project.</li>
                  <li><strong>Intelligent Code Generation</strong> - Our AI understands best practices and generates clean, maintainable code.</li>
                  <li><strong>Collaborative Environment</strong> - Work with team members and our AI assistant in real-time to accelerate development.</li>
                  <li><strong>Version Control Integration</strong> - Seamlessly connect with GitHub repositories for professional-grade source control.</li>
                </ul>
              </div>
            )}
            
            {/* Noodle 101 - Key Features */}
            {activeSection === "noodle-101" && activeSubsection === "key-features" && (
              <div>
                <h3 id="key-features-heading">Key Features</h3>
                <p>
                  NoodleSeed offers a comprehensive set of features designed to revolutionize the application development process.
                  Here are the key features that make NoodleSeed powerful and unique:
                </p>
                
                <h4 id="key-features-natural-language">Natural Language App Creation</h4>
                <p>
                  Describe your application in plain English and watch as code is generated for you. NoodleSeed's AI understands your requirements and translates them into functional code, eliminating the need to write every line manually.
                </p>
                <ul>
                  <li>Express your ideas in natural language</li>
                  <li>Refine through conversation rather than code editing</li>
                  <li>Accessible to both developers and non-developers</li>
                </ul>
                
                <h4 id="key-features-multi-platform">Multi-Platform Support</h4>
                <p>
                  Build applications for web, mobile, and desktop environments from a single project. NoodleSeed handles the platform-specific code generation, allowing you to focus on functionality rather than platform differences.
                </p>
                <ul>
                  <li>Web applications (React, Vue, Angular)</li>
                  <li>Mobile apps (iOS, Android)</li>
                  <li>Desktop applications (Windows, macOS, Linux)</li>
                </ul>
                
                <h4 id="key-features-code-generation">Intelligent Code Generation</h4>
                <p>
                  Our AI understands best practices and generates clean, maintainable code. The code follows modern standards and patterns, ensuring your application is built on a solid foundation.
                </p>
                <ul>
                  <li>Follows industry best practices</li>
                  <li>Optimized for performance and maintainability</li>
                  <li>Consistent coding style and patterns</li>
                </ul>
              </div>
            )}
            
            {/* Noodle 101 - Architecture */}
            {activeSection === "noodle-101" && activeSubsection === "architecture" && (
              <div>
                <h3 id="architecture-heading">Architecture</h3>
                <p>
                  NoodleSeed's architecture is designed to provide a seamless experience for AI-powered development.
                  This section explains the key components and how they work together.
                </p>
                
                <h4 id="architecture-system-overview">System Overview</h4>
                <p>
                  The NoodleSeed platform consists of several interconnected components that work together to enable natural language app creation.
                </p>
                
                <h4 id="architecture-key-components">Key Components</h4>
                
                <h5 id="architecture-spark">1. Noodle Spark (Frontend Interface)</h5>
                <p>
                  The user-facing interface where you interact with the system. Noodle Spark provides:
                </p>
                <ul>
                  <li>Natural language input for describing your application</li>
                  <li>Real-time code preview and editing capabilities</li>
                  <li>Project management tools</li>
                  <li>Collaboration features</li>
                </ul>
                
                <h5 id="architecture-concierge">2. Noodle Concierge (AI Assistant)</h5>
                <p>
                  The AI engine that powers NoodleSeed's natural language understanding and code generation.
                </p>
                
                <h5 id="architecture-memory">3. Noodle Memory (Context System)</h5>
                <p>
                  The system that maintains context across interactions.
                </p>
              </div>
            )}
            
            
            {/* Best Practices - Optimization Tips */}
            {activeSection === "best-practices" && activeSubsection === "optimization" && (
              <div>
                <h3 id="optimization-heading">Optimization Tips: Lessons from Expert Users</h3>
                <p>
                  Based on an in-depth analysis of Hassan Iftikhar's extensive work on complex Noodle Seed projects, 
                  we've compiled these optimization tips to help you achieve professional-quality results efficiently.
                </p>
                
                <h4 id="optimization-planning">Plan Before You Begin</h4>
                <p>
                  Start with a clear architectural vision:
                </p>
                <ul>
                  <li>Define not just what you want to build, but how the pieces fit together</li>
                  <li>Identify major components and their relationships</li>
                  <li>Establish a consistent design language early (colors, spacing, visual elements)</li>
                  <li>Determine user flows before implementation</li>
                </ul>
                
                <h4 id="optimization-incremental">Master Incremental Development</h4>
                <p>
                  Build in focused, complete layers:
                </p>
                <ul>
                  <li>Structure first: Create the complete application skeleton</li>
                  <li>One component at a time: Fully develop each section before moving to the next</li>
                  <li>Refine systematically: Address visual details in specific passes</li>
                  <li>Test continuously: Validate each component works before building dependencies</li>
                </ul>
              </div>
            )}
            
            {/* Best Practices - Design Patterns */}
            {activeSection === "best-practices" && activeSubsection === "patterns" && (
              <div>
                <h3 id="best-practices-heading">Best Practices</h3>
                <p>
                  Following these best practices will help you create high-quality applications with NoodleSeed:
                </p>
                
                <h4 id="best-practices-testing">Regular Testing</h4>
                <p>
                  Test features as they're developed to catch issues early.
                </p>
                <ul>
                  <li>Test each component individually as it's created</li>
                  <li>Verify that components work together correctly</li>
                  <li>Test edge cases and error handling</li>
                  <li>Use the built-in testing tools in NoodleSeed</li>
                </ul>
                
                <h4 id="best-practices-documentation">Documentation</h4>
                <p>
                  Use the AI assistant to help generate clear documentation for your project.
                </p>
                <ul>
                  <li>Document the purpose and functionality of each component</li>
                  <li>Include usage examples for reusable components</li>
                  <li>Document API endpoints and parameters</li>
                  <li>Keep documentation updated as the project evolves</li>
                </ul>
              </div>
            )}
            
            {/* Placeholder for other sections */}
            {(activeSection !== "getting-started" && 
              activeSection !== "noodle-101" && 
              activeSection !== "best-practices") || 
              ((activeSection === "noodle-101" && 
                activeSubsection !== "core-concepts" && 
                activeSubsection !== "key-features" && 
                activeSubsection !== "architecture") || 
               (activeSection === "best-practices" && 
                activeSubsection !== "optimization" && 
                activeSubsection !== "patterns")) && (
              <div className="placeholder-content">
                <h3>{currentSubsection?.title}</h3>
                <p>
                  This is placeholder content for the {currentSubsection?.title} section.
                  In a complete implementation, this would contain detailed documentation about {currentSubsection?.title}.
                </p>
                <div style={{ 
                  backgroundColor: "var(--color-muted)", 
                  padding: "1.5rem", 
                  borderRadius: "0.5rem", 
                  marginTop: "1.5rem" 
                }}>
                  <p>
                    Content for this section is coming soon. Check back for updates!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Table of Contents */}
        <div className="guide-toc">
          <h3 className="guide-toc-title">On This Page</h3>
          <ul className="guide-toc-list">
            {/* Introduction TOC */}
            {activeSection === "getting-started" && activeSubsection === "introduction" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('intro-getting-started')}>Getting Started</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('intro-what-is-noodleseed')}>What is NoodleSeed?</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('intro-system-requirements')}>System Requirements</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('intro-creating-first-app')}>Creating Your First Application</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('intro-effective-prompting')}>Tips for Effective Prompting</li>
              </>
            )}
            
            {/* Noodle 101 - Core Concepts TOC */}
            {activeSection === "noodle-101" && activeSubsection === "core-concepts" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('noodle101-heading')}>Noodle 101</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-core-concepts')}>Core Concepts</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-projects')}>Noodle Projects</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-spark')}>Noodle Spark</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-concierge')}>Noodle Concierge</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-memory')}>Noodle Memory</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('noodle101-key-features')}>Key Features</li>
              </>
            )}
            
            {/* Noodle 101 - Architecture TOC */}
            {activeSection === "noodle-101" && activeSubsection === "architecture" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('architecture-heading')}>Architecture</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('architecture-system-overview')}>System Overview</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('architecture-key-components')}>Key Components</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('architecture-spark')}>Noodle Spark</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('architecture-concierge')}>Noodle Concierge</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('architecture-memory')}>Noodle Memory</li>
              </>
            )}
            
            {/* Noodle 101 - Key Features TOC */}
            {activeSection === "noodle-101" && activeSubsection === "key-features" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('key-features-heading')}>Key Features</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('key-features-natural-language')}>Natural Language App Creation</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('key-features-multi-platform')}>Multi-Platform Support</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('key-features-code-generation')}>Intelligent Code Generation</li>
              </>
            )}
            
            {/* Best Practices - Optimization Tips TOC */}
            {activeSection === "best-practices" && activeSubsection === "optimization" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('optimization-heading')}>Optimization Tips</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('optimization-planning')}>Plan Before You Begin</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('optimization-incremental')}>Master Incremental Development</li>
              </>
            )}
            
            {/* Best Practices - Design Patterns TOC */}
            {activeSection === "best-practices" && activeSubsection === "patterns" && (
              <>
                <li className="guide-toc-item" onClick={() => scrollToElement('best-practices-heading')}>Best Practices</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('best-practices-testing')}>Regular Testing</li>
                <li className="guide-toc-item guide-toc-subitem" onClick={() => scrollToElement('best-practices-documentation')}>Documentation</li>
              </>
            )}
            
            {/* Placeholder TOC for other sections */}
            {(activeSection !== "getting-started" && 
              activeSection !== "noodle-101" && 
              activeSection !== "best-practices") || 
              ((activeSection === "noodle-101" && 
                activeSubsection !== "core-concepts" && 
                activeSubsection !== "key-features" && 
                activeSubsection !== "architecture") || 
               (activeSection === "best-practices" && 
                activeSubsection !== "optimization" && 
                activeSubsection !== "patterns")) && (
              <>
                <li className="guide-toc-item">{currentSubsection?.title}</li>
                <li className="guide-toc-item guide-toc-subitem">Overview</li>
                <li className="guide-toc-item guide-toc-subitem">Key Concepts</li>
                <li className="guide-toc-item guide-toc-subitem">Examples</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoodleGuidePage;
