import { useState, useEffect } from 'react'
import StaggeredMenu from '../react-bits/StaggeredMenu'

interface SideBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const SideBar: React.FC<SideBarProps> = ({ 
  activeSection, 
  setActiveSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'intro', label: 'Intro' },
    { id: 'summary', label: 'Summary' },
    { id: 'core-skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const menuItems = navItems.map(item => ({
    label: item.label,
    ariaLabel: `Go to ${item.label} section`,
    link: `#${item.id}`
  }))

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/srinjoy-sinha-508963276/' },
    { label: 'GitHub', link: 'https://github.com/srinjoysinha5113' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 md:backdrop-blur-md md:border-b md:border-accent-primary/10 pb-4' : 'bg-primary/95 md:backdrop-blur-sm pb-4'
      }`}>
        <div className="container bg-primary/95 md:backdrop-blur-sm px-6 py-3">
          <div className="flex justify-between items-center py-3">
            <div className="hidden md:flex justify-between items-center w-full space-x-12 lg:space-x-16 my-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-lg font-medium tracking-wide transition-colors duration-200 p-10 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-[#8A8A8F] hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-0 right-0 h-12 bg-accent-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="md:hidden relative">
              <StaggeredMenu
                position="left"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={false}
                menuButtonColor="#ED EDED"
                openMenuButtonColor="#8E1B1B"
                changeMenuColorOnOpen={true}
                colors={['#1A1A1A', '#8E1B1B']}
                accentColor="#8E1B1B"
                isFixed={true}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SideBar