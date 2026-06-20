export default function Nav() {
  return (
    <nav className="pf-nav">
      <div className="pf-nav-inner">
        <a href="#" className="nav-logo">landy.wu</a>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <div className="nav-status">
            <div className="status-dot" />
            Open to work
          </div>
        </div>
      </div>
    </nav>
  )
}
