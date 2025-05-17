import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './style.css'
import './pages/blog.css'
import './pages/changelog.css'
import './pages/noodleguide.css'

// Layout
import Layout from './components/layout/Layout'

// Pages
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ChangelogPage from './pages/ChangelogPage'
import NoodleGuidePage from './pages/NoodleGuidePage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="academy" element={<NoodleGuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
