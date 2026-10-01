import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const projectLabel =
    project.type === 'client'
      ? 'Client Project'
      : project.featured
        ? 'Featured Project'
        : null

  return (
    <article
      className={`project-card${project.featured ? ' project-card--featured' : ''}`}
    >
      <div className="project-image-container">
        <img
          className={`project-image project-image--${project.imageFit ?? 'cover'}`}
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-content">
        {projectLabel && <p className="project-label">{projectLabel}</p>}

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <ul className="project-technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo <span aria-hidden="true">↗</span>
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
