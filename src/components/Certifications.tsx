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
      date: "Dec 2025"
    },
    {
      title: "Microsoft Copilot",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025"
    },
    {
      title: "Power BI for Business Applications",
      issuer: "Microsoft Learn × FICE",
      date: "Dec 2025"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jul 2025"
    }
  ]

  return (
    <section id="certifications" className="section">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="section-label mb-6">
          <span className="number">06</span> — CERTIFICATIONS
        </div>
        
        <h2 className="section-title mb-16">
          Professional
          <br />
          Certifications
        </h2>
        
        <div className="max-w-4xl space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start pb-4 border-b border-accent-primary/10 last:border-0">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {cert.title}
                </h3>
                <div className="text-secondary text-sm">
                  {cert.issuer}
                </div>
              </div>
              <div className="text-secondary text-sm mt-1 md:mt-0">
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
