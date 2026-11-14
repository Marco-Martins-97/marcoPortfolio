import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { ProjectDetails } from './pages/ProjectDetails.jsx'
import { Projects } from './pages/Projects.jsx'

/**
 * Root application shell connecting navigation, route views, and footer.
 * @returns {JSX.Element} Complete routed layout.
 */
function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-obsidian text-text">
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
