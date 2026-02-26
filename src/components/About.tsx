const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label">
          <span className="number">01</span> — ABOUT
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title mb-8">
              Engineering Precision
              <br />
              & Strategic Development
            </h2>
            
            <div className="space-y-6 text-secondary leading-relaxed">
              <p>
                AI/ML Engineer based in Kolkata with extensive experience in Full-Stack Development. 
                I specialize in building high-performance, scalable applications that bridge the gap 
                between artificial intelligence and practical business solutions.
              </p>
              
              <p>
                My approach combines disciplined engineering practices with innovative problem-solving, 
                ensuring every project meets the highest standards of performance and reliability.
              </p>
              
              <p>
                From machine learning models to responsive web applications, I deliver solutions that 
                are both technically sophisticated and user-centric.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary">Machine Learning</span>
                  <span className="text-accent-primary">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Full-Stack Development</span>
                  <span className="text-accent-primary">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">System Architecture</span>
                  <span className="text-accent-primary">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Performance Optimization</span>
                  <span className="text-accent-primary">88%</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'AWS', 'Docker'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm border border-accent-primary/30 text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About