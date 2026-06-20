import { IconArrowUpRight } from '@tabler/icons-react'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'

function ProjectRow({ project }) {
  return (
    <a
      className="proj-row"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="proj-idx">{project.id}</div>
      <div className="proj-info">
        <div className="proj-name">{project.name}</div>
        <div className="proj-tagline">{project.tagline}</div>
      </div>
      <div className="proj-stack-wrap">
        {project.stack.map(tag => (
          <span key={tag} className="proj-tag">{tag}</span>
        ))}
      </div>
      <div className="proj-arrow">
        <IconArrowUpRight size={16} stroke={1.5} aria-hidden="true" />
      </div>
    </a>
  )
}

export default function Work() {
  const headerRef = useReveal(0)
  const listRef = useReveal(60)

  return (
    <section id="work" className="pf-work">
      <div ref={headerRef} className="section-header reveal">
        <span className="section-label">Selected work</span>
        <span className="section-count">0{projects.length} projects</span>
      </div>
      <div ref={listRef} className="proj-list reveal">
        {projects.map(p => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
