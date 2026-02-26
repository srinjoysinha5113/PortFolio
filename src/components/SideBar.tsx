import { useState, useEffect } from 'react'

interface SideBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const SideBar: React.FC<SideBarProps> = ({ 
  activeSection, 
  setActiveSection, 
  mobileMenuOpen, 
  setMobileMenuOpen 
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-accent-primary/10 pb-4' : 'bg-primary/95 backdrop-blur-sm pb-4'
      }`}>
        <div className="container bg-primary/95 backdrop-blur-sm px-6 py-4">
          <div className="flex justify-between items-center py-8">
            <div className="hidden md:flex justify-between items-center w-full space-x-12 lg:space-x-16 my-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-6 px-4 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-[#8A8A8F] hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-accent-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-secondary hover:text-primary transition-colors duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileMenuOpen ? (
                    <line x1="18" y1="6" x2="6" y2="18" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 bg-primary border-b border-accent-primary/10 transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container pt-20 pb-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar