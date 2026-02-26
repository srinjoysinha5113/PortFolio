const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Machine Learning Specialization",
      issuer: "Stanford University",
      date: "2024",
      credentialId: "STAN-ML-2024",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision"]
    },
    {
      title: "Cloud Architecture Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ARCH-PRO-2023",
      skills: ["AWS", "Cloud Design", "Scalability"]
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-FS-2023",
      skills: ["React", "Node.js", "Database Design"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      credentialId: "GOOG-TF-2023",
      skills: ["TensorFlow", "ML Pipelines", "Model Deployment"]
    }
  ]

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-label">
          <span className="number">03</span> — CERTIFICATES
        </div>
        
        <h2 className="section-title mb-16">
          Professional
          <br />
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <div className="flex items-center text-secondary text-sm mb-3">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-xs text-secondary font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
                <div className="w-12 h-12 border border-accent-primary/20 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 text-xs border border-accent-primary/10 text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-primary">
            Verify All Credentials
          </button>
        </div>
      </div>
    </section>
  )
}

export default Certificates
