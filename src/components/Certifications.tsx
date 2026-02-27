import SpotlightCard from '../react-bits/SpotlightCard'

const Certifications = () => {
  const certifications = [
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025"
    },
    {
      title: "Cloud Administration & Engineering",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025"
    },
    {
      title: "Microsoft Azure",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: ""
    },
    {
      title: "Microsoft Copilot",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: ""
    },
    {
      title: "Power BI for Business Applications",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: ""
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      description: ""
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      description: ""
    }
  ]

  return (
    <section id="certifications" className="section">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="section-label mb-6">
          <span className="number">06</span> — CERTIFICATIONS
        </div>
        
        <h2 className="section-title mb-16">
          Professional Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index}>
              <div className="hidden md:block">
                <SpotlightCard className="card group cursor-pointer p-6" spotlightColor="rgba(255, 0, 0, 0.2)">
                  <div className="text-accent-primary font-medium mb-2">
                    0{index + 1} — {cert.title}
                  </div>
                  
                  <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                    {cert.issuer}
                  </div>
                  
                  <p className="text-secondary mb-4 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                  
                  <div className="text-xs text-accent-primary font-mono mb-4">
                    {cert.date}
                  </div>
                </SpotlightCard>
              </div>
              <div className="md:hidden card group cursor-pointer p-6">
                <div className="text-accent-primary font-medium mb-2">
                  0{index + 1} — {cert.title}
                </div>
                
                <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                  {cert.issuer}
                </div>
                
                <p className="text-secondary mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                <div className="text-xs text-accent-primary font-mono mb-4">
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
