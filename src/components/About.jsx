import { useReveal } from '../hooks/useReveal'

const timeline = [
  {
    year: 'Aug – Nov 2025',
    role: 'Software Developer Intern',
    org: 'Aubot',
  },
  {
    year: 'Feb 2024 – Dec 2025',
    role: 'Master of Information Technology',
    org: 'Swinburne University of Technology',
  },
  {
    year: '2023',
    role: 'Self-taught Web Development',
    org: 'Udemy',
  },
]

export default function About() {
  const leftRef = useReveal(0)
  const rightRef = useReveal(80)

  return (
    <section id="about" className="pf-about">
      <div className="pf-about-inner">
        <div ref={leftRef} className="reveal">
          <p className="section-label">About</p>
          <p className="about-bio">
            I'm Landy Wu, a full-stack developer based in Melbourne. I recently
            completed a Master of Information Technology at Swinburne University,
            graduating with a High Distinction average.
          </p>
          <p className="about-bio">
            Before tech, I spent five years in real estate in Taiwan working
            directly with clients, financial institutions, and sales teams. That
            background shapes how I think about software: the people using it
            matter as much as the code behind it.
          </p>
          <p className="about-bio">
            I care about writing software that's both technically sound and
            genuinely useful to the people using it.
          </p>
        </div>
        <div ref={rightRef} className="reveal timeline-col">
          <p className="section-label">Timeline</p>
          <div className="timeline">
            {timeline.map(({ year, role, org }) => (
              <div key={year} className="timeline-item">
                <div className="timeline-year">{year}</div>
                <div>
                  <div className="timeline-role">{role}</div>
                  <div className="timeline-org">{org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
