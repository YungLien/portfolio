import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="pf-contact">
      <div className="pf-contact-inner">
        <div ref={ref} className="reveal">
          <p className="section-label">Contact</p>
          <h2 className="contact-h2">
            Let's build<br />something <span>good.</span>
          </h2>
          <p className="contact-sub">
            Open to full-time roles and interesting freelance projects in
            Melbourne or remote.
          </p>
          <div className="contact-links">
            <a href="mailto:wuyunglien@gmail.com" className="contact-btn accent">
              <IconMail size={15} stroke={1.5} />
              Say hello
            </a>
            <a
              href="https://github.com/YungLien"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <IconBrandGithub size={15} stroke={1.5} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yung-lien-wu-48a5b2158/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <IconBrandLinkedin size={15} stroke={1.5} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
