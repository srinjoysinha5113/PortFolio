import { useState } from 'react'
import SideBar from './components/SideBar'
import Intro from './components/Intro'
import Summary from './components/Summary'
import CoreSkills from './components/CoreSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Particles from './react-bits/Particles'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <div className="relative min-h-screen bg-primary">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Particles
          particleCount={100}
          particleSpread={10}
          speed={0.05}
          particleColors={["#ffffff","#ff0000","#ff0000"]}
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
        <Summary />
        <CoreSkills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App
