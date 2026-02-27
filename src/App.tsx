import { Suspense, lazy, useState } from 'react'
import SideBar from './components/SideBar'
import Intro from './components/Intro'
import Particles from './react-bits/Particles'
import './App.css'

const Summary = lazy(() => import('./components/Summary'))
const CoreSkills = lazy(() => import('./components/CoreSkills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div className="relative min-h-screen bg-primary">
      {/* Background Image */}
      <div 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 0,
          backgroundImage: 'url(/PortFolio-Background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Particles Overlay */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
        <Particles
          particleCount={isMobile ? 40 : 100}
          particleSpread={10}
          speed={0.05}
          particleColors={["#ffffff","#ffffff","#ffffff"]}
          moveParticlesOnHover
          particleHoverFactor={1.9}
          alphaParticles={false}
          particleBaseSize={70}
          sizeRandomness={1}
          cameraDistance={40}
          disableRotation
        />
      </div>
      
      <SideBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />
      
      <main className="relative z-10">
        <Intro setActiveSection={setActiveSection} />
        <Suspense fallback={<div className="h-20" />}>
          <Summary />
          <CoreSkills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App
