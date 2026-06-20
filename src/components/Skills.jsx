import {
  IconServer,
  IconLayout,
  IconDatabase,
  IconTools,
} from '@tabler/icons-react'
import { useReveal } from '../hooks/useReveal'

const skills = [
  {
    Icon: IconServer,
    title: 'Backend',
    items: 'FastAPI\nNode.js\nPython\nJava\nREST APIs',
  },
  {
    Icon: IconLayout,
    title: 'Frontend',
    items: 'React 18\nVite\nVanilla JS\nHTML / CSS',
  },
  {
    Icon: IconDatabase,
    title: 'Data',
    items: 'PostgreSQL\nMongoDB\nSupabase\nSQL',
  },
  {
    Icon: IconTools,
    title: 'Tooling',
    items: 'Git / GitHub\nVercel\nRailway\nNetlify',
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <div ref={ref} className="pf-skills reveal">
      <div className="pf-skills-inner">
        {skills.map(({ Icon, title, items }) => (
          <div key={title} className="skill-cell">
            <Icon className="skill-icon" size={20} stroke={1.5} aria-hidden="true" />
            <div className="skill-title">{title}</div>
            <div className="skill-items">{items}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
