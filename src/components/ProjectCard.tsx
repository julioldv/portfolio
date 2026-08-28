import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <ul className="project-technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}

        {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
            </a>
            )}
      </div>
    </article>
  )
}

export default ProjectCard