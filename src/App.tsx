import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="hero-intro">Hi, I'm</p>

          <h1>Julio Lugo</h1>

          <h2>Junior Frontend Developer</h2>

          <p className="hero-description">
            I build web applications with JavaScript, TypeScript, and React.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projects">
              View Projects
            </a>

            <a className="button secondary-button" href="#contact">
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>

          <p>
            I'm a Computer Engineering graduate focused on software and web
            development. I enjoy building practical projects, learning new
            technologies, and improving my skills through hands-on development.
          </p>

          <p>
            I'm currently focused on JavaScript, TypeScript, React, and modern web
            development while preparing for my first professional software
            development role.
          </p>
        </section>

        <section id="skills" className="skills">
          <h2 className="section-title">Skills</h2>

          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Jest / Vitest</li>
          </ul>
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
          <h2 className="section-title">Contact</h2>

          <p>
            I'm open to junior software development opportunities and would be happy
            to connect.
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
              rel="noreferrer"
            >
              LinkedIn
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
      </main>

      <footer className="site-footer">
        <p>© 2026 Julio Lugo</p>
      </footer>
    </>
  )
}

export default App