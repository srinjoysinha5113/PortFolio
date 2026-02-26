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
import DarkVeil from './react-bits/DarkVeil'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-primary">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <DarkVeil
          hueShift={240}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          speed={1}
          scanlineFrequency={2}
          warpAmount={0.02}
        />
      </div>
      
      <SideBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
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
