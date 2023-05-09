import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="nav-full-width">
      <nav className="nav-container">
        <div className="nav-left">
          <h3>Kieran Gill</h3>
          <Link href="#contact">Contact me</Link>
        </div>
        <div className="nav-right">
          <a
            href="https://github.com/KieranWebDev"
            target="_blank"
            rel="noreferrer"
          >
            Github Repos
          </a>

          <a
            href="https://drive.google.com/file/d/1Kg5LkrDOL_fEDUsl0V1TUa62upXkjl55/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <Link href="#about-me">About Me</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </nav>
    </div>
  );
}
