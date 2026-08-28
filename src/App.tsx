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

          <h2>Junior Software Developer</h2>

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

        <section id="about">
          <h2>About Me</h2>
          <p>
            Computer Engineering graduate focused on web development and
            building practical software projects.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>

          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <article>
            <h3>Shopping Cart</h3>
            <p>React and TypeScript shopping cart application.</p>
          </article>

          <article>
            <h3>Battleship</h3>
            <p>JavaScript Battleship game built with test-driven development.</p>
          </article>

          <article>
            <h3>CV Application</h3>
            <p>React application for creating and editing a CV.</p>
          </article>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>You can find me on GitHub and LinkedIn.</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Julio Lugo</p>
      </footer>
    </>
  )
}

export default App