import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Home.tsx'
import About from './pages/About.tsx'
import Features from './pages/Features.tsx'
import Pricing from './pages/Pricing.tsx'
import Layout from './components/Layout.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
