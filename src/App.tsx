import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#home">
            Julio Lugo
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Work</a>
            </li>

            <li>
              <a className="nav-contact" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="hero-eyebrow">Software Developer</p>

          <h1>
            Hi, I'm <span>Julio Lugo.</span>
          </h1>

          <p className="hero-description">
            Computer Engineering graduate building modern web applications with
            React, TypeScript, and JavaScript.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              View My Work
            </a>

            <a
              className="button secondary-button"
              href="https://github.com/julioldv"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-heading">
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-title">
              I enjoy turning ideas into practical web experiences.
            </h2>
          </div>

          <div className="about-content">
            <p>
              I'm a Computer Engineering graduate focused on software and web
              development. I build responsive applications with JavaScript,
              TypeScript, and React, with an emphasis on clean interfaces and
              maintainable code.
            </p>

            <p>
              I also enjoy testing, working with Git, and improving projects
              iteratively—from planning and implementation to debugging and
              deployment.
            </p>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="section-heading">
            <p className="section-eyebrow">Technical Skills</p>
            <h2 className="section-title">
              Tools I use to build and ship projects.
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-group">
              <h3>Frontend</h3>

              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>React Router</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3>Testing</h3>

              <ul className="skills-list">
                <li>Jest</li>
                <li>Vitest</li>
                <li>React Testing Library</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3>Tools</h3>

              <ul className="skills-list">
                <li>Git</li>
                <li>GitHub</li>
                <li>Vite</li>
                <li>Webpack</li>
                <li>npm</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-content">
            <p className="section-eyebrow">Contact</p>

            <h2 className="section-title">Let’s build something useful.</h2>

            <p className="contact-description">
              I'm open to junior software development opportunities and would be
              happy to connect about roles, projects, or collaboration.
            </p>

            <div className="contact-links">
              <a
                className="button primary-button"
                href="mailto:julioldv@gmail.com"
              >
                Email Me
              </a>

              <a
                className="button secondary-button"
                href="https://www.linkedin.com/in/juliolugodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button secondary-button"
                href="https://github.com/julioldv"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 Julio Lugo</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
