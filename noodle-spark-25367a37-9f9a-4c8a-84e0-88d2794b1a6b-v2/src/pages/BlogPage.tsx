import React from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "../data/blog";
import "./blog.css";

const BlogPage = () => {
  return (
    <div className="doc-container">
      <h1 className="page-title">Blog</h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-secondary)", marginBottom: "2rem" }}>
        Discover articles, tutorials, and insights about Noodle Seed.
      </p>
      
      <div className="content-grid" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "2rem" 
      }}>
        {blogArticles.map((article) => (
          <Link 
            key={article.id} 
            to={`/blog/${article.id}`} 
            className="blog-card" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img 
              src={`https://www.noodleseed.com/api/image?q=abstract tech background`} 
              alt={article.title} 
              className="blog-image"
            />
            <div className="blog-card-content">
              <h2 className="blog-title">{article.title}</h2>
              <p className="blog-excerpt">{article.excerpt}</p>
              <div className="blog-meta">
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

export default BlogPage;
