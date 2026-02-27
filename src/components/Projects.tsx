import SpotlightCard from '../react-bits/SpotlightCard'

const Projects = () => {
  const projects = [
    {
      title: "Jindal Operations Assistant",
      subtitle: "Enterprise AI Knowledge Management System",
      description: "Engineered a Retrieval-Augmented Generation (RAG) pipeline to process PDF, Excel, PPTX, and CSV data into a FAISS vector store. Built a FastAPI backend for asynchronous streaming and local LLM interaction via Ollama. Developed a React frontend using Server-Sent Events (SSE) for real-time response streaming. Integrated OCR (Tesseract + Pillow) for scanned document ingestion.",
      techStack: "FastAPI, Python, React, FAISS, Ollama, Pandas, PyPDF, GSAP, Vite, Tesseract"
    },
    {
      title: "Office Order Management System", 
      subtitle: "Secure HR-Tech Platform",
      description: "Developed full-stack system using React 19 + Node.js. Designed MySQL schema with RBAC and audit trails. Implemented JWT Auth, Joi validation, Helmet security. Built real-time dashboards for workflow tracking.",
      techStack: "React 19, Tailwind CSS 4, Node.js, Express.js, MySQL, JWT, Bcrypt, Multer, Joi, Vite"
    },
    {
      title: "JPL Pass Management System",
      subtitle: "Enterprise Workflow Automation",
      description: "Designed digital gate-pass approval workflow. Implemented RBAC + JWT authentication. Integrated Swagger documentation. Built XLSX export functionality.",
      techStack: "React 19, Tailwind CSS 4, Node.js, Express.js, MySQL, JWT, Swagger, Vite"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="section-label mb-6">
          <span className="number">05</span> — PROJECTS
        </div>
        
        <h2 className="section-title mb-16">
          Engineering Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="hidden md:block">
                <SpotlightCard className="card group cursor-pointer p-6" spotlightColor="rgba(255, 0, 0, 0.1)">
                  <div className="text-accent-primary font-medium mb-2">
                    0{index + 1} — {project.title}
                  </div>
                  
                  <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                    {project.subtitle}
                  </div>
                  
                  <p className="text-secondary mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="text-xs text-accent-primary font-mono mb-4">
                    {project.techStack}
                  </div>
                </SpotlightCard>
              </div>
              <div className="md:hidden card group cursor-pointer p-6">
                <div className="text-accent-primary font-medium mb-2">
                  0{index + 1} — {project.title}
                </div>
                
                <div className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200">
                  {project.subtitle}
                </div>
                
                <p className="text-secondary mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="text-xs text-accent-primary font-mono mb-4">
                  {project.techStack}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
