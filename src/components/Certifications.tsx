import { useState } from 'react'
import SpotlightCard from '../react-bits/SpotlightCard'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handleCertClick = (cert: any) => {
    if (cert.description && cert.description !== "" && cert.skills && cert.thumbnail) {
      setSelectedCert(cert)
      setShowDialog(true)
    }
  }

  const closeDialog = () => {
    setShowDialog(false)
  }

  const certifications = [
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: "A 20-hour comprehensive program on the fundamentals of AI and ML models.",
      credentialId: "-",
      skills: ["Artificial Intelligence (AI), Machine Learning (ML), Neural Networks, Data Science"],
      thumbnail: "AIML-MICROSOFT-FICE-CERTIFICATE.webp"
    },
    {
      title: "Cloud Administration & Engineering",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: "Completed an intensive 40-hour course covering the architecture and management of cloud environments.",
      credentialId: "-",
      skills: ["Cloud Infrastructure, Systems Engineering, IT Operations, Resource Management"],
      thumbnail: "CLOUD-ADMINISTRATION-&-ENGG-MICROSOFT-FICE-CERTIFICATE.webp"
    },
    {
      title: "Microsoft Azure",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: "Focused on implementing and managing core Azure cloud services.",
      credentialId: "-",
      skills: ["Microsoft Azure, Cloud Computing, Azure Services, Virtualization"],
      thumbnail: "AZURE-MICROSOFT-FICE-CERTIFICATE.webp"
    },
    {
      title: "Microsoft Copilot",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: "Worked with tools like Microsoft Copilot, Generative AI, Microsoft 365.",
      credentialId: "-",
      skills: ["Microsoft Copilot, Generative AI, Microsoft 365"],
      thumbnail: "COPILOT-MICROSOFT-FICE-CERTIFICATE.webp"
    },
    {
      title: "Power BI for Business Applications",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025",
      description: "Completed a 20-hour specialized course on Microsoft Learn focused on leveraging Power BI for data-driven business decision-making.",
      credentialId: "-",
      skills: ["Power BI, Data Visualization, Business Intelligence, Data Analysis"],
      thumbnail: "POWER-BI-MICROSOFT-FICE-CERTIFICATE.webp"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      description: "Participated in a simulated work environment at Deloitte via Forage, focusing on practical tasks in coding and development.",
      credentialId: "PkNzv5oCx3tEseTA4",
      skills: ["Software Coding, Development, Technical Problem Solving"],
      thumbnail: "Deloitte-Technology-Job-Simulation.webp"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      description: "Completed a practical job simulation through Forage involving real-world tasks at Deloitte, including data analysis.",
      credentialId: "qHiBXXDwjACDbyma3",
      skills: ["Data Analysis, Forensic Technology, Data Visualization, Tableau"],
      thumbnail: "Deloitte-Data-Analytics-Job-Simulation.webp"
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
                <div onClick={() => handleCertClick(cert)}>
                  <SpotlightCard 
                    className="card group cursor-pointer p-6 relative" 
                    spotlightColor="rgba(255, 0, 0, 0.1)"
                  >
                    {cert.description && cert.description !== "" && cert.skills && cert.thumbnail && (
                      <div className="absolute bottom-2 right-2 text-accent-primary text-lg font-bold">
                        +
                      </div>
                    )}
                    <div className="text-accent-primary font-medium mb-2">
                      0{index + 1} — {cert.title}
                    </div>
                    
                    <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                      {cert.issuer}
                    </div>
                    
                    {!(cert.description && cert.description !== "" && cert.skills && cert.thumbnail) && (
                      <p className="text-secondary mb-4 leading-relaxed text-sm">
                        {cert.description}
                      </p>
                    )}
                    
                    <div className="text-xs text-accent-primary font-mono mb-4">
                      {cert.date}
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="md:hidden card group cursor-pointer p-6 relative" onClick={() => handleCertClick(cert)}>
                {cert.description && cert.description !== "" && cert.skills && cert.thumbnail && (
                  <div className="absolute bottom-2 right-2 text-accent-primary text-lg font-bold">
                    +
                  </div>
                )}
                <div className="text-accent-primary font-medium mb-2">
                  0{index + 1} — {cert.title}
                </div>
                
                <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                  {cert.issuer}
                </div>
                
                {!(cert.description && cert.description !== "" && cert.skills && cert.thumbnail) && (
                  <p className="text-secondary mb-4 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                )}
                
                <div className="text-xs text-accent-primary font-mono mb-4">
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && selectedCert && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="card px-4 sm:px-16 py-6 sm:py-12 max-w-4xl mx-auto max-h-[80vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl w-[92vw] sm:w-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex justify-between items-start mb-8">
              <div className="pr-8">
                <h3 className="section-title mb-4">
                  {selectedCert.title}
                </h3>
                <div className="text-accent-primary font-medium text-sm">
                  {selectedCert.issuer} • {selectedCert.date}
                </div>
              </div>
              <button 
                onClick={closeDialog}
                className="text-gray-400 hover:text-primary transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - All Text Content */}
              <div className="space-y-8">
                <div>
                  <div className="section-label mb-4">
                    <span className="number">CREDENTIAL-ID</span>
                  </div>
                  <code className="text-accent-primary font-mono text-sm">
                    {selectedCert.credentialId}
                  </code>
                </div>
                
                <div>
                  <div className="section-label mb-4">
                    <span className="number">SKILLS</span>
                  </div>
                  <div className="space-y-1">
                    {selectedCert.skills?.map((skill: string, index: number) => (
                      <div key={index} className="items-left">
                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2"></div>
                        <span className="text-secondary text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="section-label mb-4">
                    <span className="number">INFO</span>
                  </div>
                  <p className="text-secondary leading-relaxed text-sm">
                    {selectedCert.description}
                  </p>
                </div>
              </div>
              
              {/* Right Column - Certificate Image Only */}
              {selectedCert.thumbnail && (
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-800/50 rounded-lg px-12 py-10 border border-gray-700 w-full">
                    <img 
                      loading="lazy"
                      src={`/${selectedCert.thumbnail}`} 
                      alt="Certificate thumbnail" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications
