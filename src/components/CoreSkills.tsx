const CoreSkills = () => {
  const skills = {
    "AI & Machine Learning": [
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (Ollama)",
      "FAISS",
      "Semantic Search",
      "Embeddings",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OCR (Tesseract)"
    ],
    "Backend": [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Python",
      "Asynchronous APIs",
      "Pydantic",
      "Joi"
    ],
    "Frontend": [
      "React 19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS 4",
      "Vite",
      "GSAP",
      "Framer Motion",
      "React Router",
      "Axios"
    ],
    "Databases": [
      "MySQL",
      "MongoDB",
      "PostgreSQL"
    ],
    "Security & Auth": [
      "JWT Authentication",
      "Bcrypt",
      "RBAC",
      "Helmet",
      "Rate Limiting",
      "Input Validation"
    ],
    "Dev Tools": [
      "Git",
      "Docker",
      "Swagger",
      "VS Code"
    ]
  }

  return (
    <section id="core-skills" className="section">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="section-label mb-6">
          <span className="number">03</span> — CORE SKILLS
        </div>
        
        <h2 className="section-title mb-16">
          Technical
          <br />
          Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-primary">
                {category}
              </h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <div key={skill} className="text-secondary text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreSkills
