import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const leftRef = useReveal(0)
  const rightRef = useReveal(80)

  return (
    <section className="pf-hero">
      <div className="pf-hero-inner">
        <div ref={leftRef} className="reveal">
          <p className="hero-label">Portfolio — 2026</p>
          <h1 className="hero-h1">
            Building<br />with <span>purpose.</span>
          </h1>
          <p className="hero-sub">
            Recent Master of Information Technology graduate based in
            Melbourne, with hands-on development experience from an
            internship at Aubot. I came into tech from real estate and
            hospitality, which means I build for the person using the app,
            not just the engineer reviewing the code.
          </p>
        </div>
        <div ref={rightRef} className="reveal">
          <div className="hero-stat">
            <div className="stat-val">4</div>
            <div className="stat-key">Projects</div>
          </div>
          <div className="hero-stat">
            <div className="stat-val">AUS</div>
            <div className="stat-key">VIC</div>
          </div>
          <div className="hero-stat">
            <div className="stat-val">MEL</div>
            <div className="stat-key">Location</div>
          </div>
        </div>
      </div>
    </section>
  )
}
