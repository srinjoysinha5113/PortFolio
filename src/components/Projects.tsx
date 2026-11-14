import SpotlightCard from '../react-bits/SpotlightCard'

const Projects = () => {
  const projects = [
    {
      title: "Jindal Operations Assistant",
      subtitle: "Enterprise AI Knowledge Management System",
      description: "I architected an on-premise RAG platform to solve slow manual knowledge lookup across thousands of plant SOPs, Excel sheets, and scanned docs. Built an asynchronous FastAPI and FAISS semantic pipeline with local Ollama LLMs and Tesseract OCR, streaming responses to a React frontend via SSE. It slashed query resolution times by ~75% while keeping 100% of sensitive data securely inside our local network."
    },
    {
      title: "Office Order Management System",
      subtitle: "Secure HR-Tech Platform",
      description: "I built this full-stack system with React 19, Node.js, and MySQL to replace fragmented email and paper-based order routing. Implemented granular RBAC, JWT authentication, and automated audit logging so every order creation, review, and approval is immutably tracked. Eliminating misplaced requests and giving department leads real-time dashboard visibility across all active directives."
    },
    {
      title: "JPL Pass Management System",
      subtitle: "Enterprise Workflow Automation",
      description: "I engineered an automated digital gate-pass system to eliminate checkpoint bottlenecks and manual paper clearances across plant facilities. Designed approval workflows with secure JWT-based RBAC, real-time gatekeeper verification. Reduced visitor and material pass clearance times by ~80% across daily plant entries."
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="section-label mb-6">
          <span className="number">05</span> — PROJECTS
        </div>

        <h2 className="section-title mb-16">
          Internship Projects
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
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
