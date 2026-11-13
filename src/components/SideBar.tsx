import React from 'react'
import StaggeredMenu from '../react-bits/StaggeredMenu'

interface SideBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const SideBar: React.FC<SideBarProps> = ({
  setActiveSection
}) => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#intro' },
    { label: 'Summary', ariaLabel: 'Go to summary section', link: '#summary' },
    { label: 'Skills', ariaLabel: 'Go to skills section', link: '#core-skills' },
    { label: 'Experience', ariaLabel: 'Go to experience section', link: '#experience' },
    { label: 'Projects', ariaLabel: 'Go to projects section', link: '#projects' },
    { label: 'Certifications', ariaLabel: 'Go to certifications section', link: '#certifications' },
    { label: 'Education', ariaLabel: 'Go to education section', link: '#education' },
    { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' }
  ]

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/srinjoy-sinha-508963276/' },
    { label: 'GitHub', link: 'https://github.com/srinjoysinha5113' }
  ]

  return (
    <StaggeredMenu
      position="left"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#cf9797ff', '#ff2727ff']}
      logoUrl="/Portfolio-Rel-Icon.webp"
      accentColor="#ff2727"
      isFixed={true}
      onItemClick={(item) => {
        const id = item.link.replace(/^#/, '')
        setActiveSection(id)
      }}
      onMenuOpen={() => console.log('Menu opened')}
      onMenuClose={() => console.log('Menu closed')}
    />
  )
}

export default SideBar
