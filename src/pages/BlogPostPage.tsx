import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { blogArticles } from "../data/blog";
import "./blog.css";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || "0");
  const [activeSection, setActiveSection] = useState<string>("");
  const headingRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
  
  // Find the blog post with the matching ID
  const blogPost = blogArticles.find(article => article.id === blogId);
  
  // Generate table of contents from headings
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);
  
  // Extract headings from blog post content when it loads
  useEffect(() => {
    if (blogPost?.content) {
      // We'll populate this in the next render after the content is loaded
      setTimeout(() => {
        const headings = document.querySelectorAll('.blog-content-wrapper h2');
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
  }, [blogPost]);
  
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
  
  // If no matching blog post is found, show a message
  if (!blogPost) {
    return (
      <div className="doc-container">
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h1 className="page-title">Blog Post Not Found</h1>
          <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="doc-container">
      <div style={{ marginBottom: "2rem" }}>
        <Link to="/blog" style={{ color: "var(--color-primary)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          ← Back to Blog
        </Link>
      </div>
      
      <div className="blog-layout">
        {/* Left Column - Other Blog Posts */}
        <div className="blog-nav">
          <h3 className="blog-nav-title">More Articles</h3>
          <ul className="blog-nav-list">
            {blogArticles.map((article) => (
              <li key={article.id} className="blog-nav-item">
                <Link 
                  to={`/blog/${article.id}`} 
                  className={`blog-nav-link ${article.id === blogId ? 'active' : ''}`}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Middle Column - Content */}
        <div className="blog-content">
          {/* If the blog post has custom content, render it */}
          {blogPost.content ? (
            <article className="blog-post">
              {blogPost.content}
            </article>
          ) : (
            /* Otherwise, render a default layout */
            <article className="blog-post">
              <h1 className="page-title">{blogPost.title}</h1>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-secondary)", marginBottom: "2rem" }}>
                <span>{blogPost.author}</span>
                <span>{blogPost.date}</span>
              </div>
              <p>{blogPost.excerpt}</p>
              <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--color-muted)", borderRadius: "0.5rem", textAlign: "center" }}>
                <p>Full content coming soon!</p>
              </div>
            </article>
          )}
        </div>
        
        {/* Right Column - Table of Contents */}
        <div className="blog-toc">
          <h3 className="blog-toc-title">Table of Contents</h3>
          {tableOfContents.length > 0 ? (
            <ul className="blog-toc-list">
              {tableOfContents.map((item) => (
                <li 
                  key={item.id} 
                  className={`blog-toc-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="blog-toc-empty">No sections available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
