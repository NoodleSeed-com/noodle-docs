import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './style.css'
import './pages/caseStudies.css'
import './pages/changelog.css'
import './pages/noodleguide.css'

// Layout
import Layout from './components/layout/Layout'

// Pages
import HomePage from './pages/HomePage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CaseStudyPage from './pages/CaseStudyPage'
import ChangelogPage from './pages/ChangelogPage'
import NoodleGuidePage from './pages/NoodleGuidePage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:id" element={<CaseStudyPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="academy" element={<NoodleGuidePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
