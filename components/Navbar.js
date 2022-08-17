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
            href="https://drive.google.com/file/d/12UdRjUktBZj6KWG0mzpGKRlDVw4G0Zpp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://github.com/KieranWebDev/100-Days-Of-Code-Diary-School-of-Code-Bootcamp-Diary"
            target="_blank"
            rel="noreferrer"
          >
            #100DaysofCode
          </a>
          <Link href="#projects">Projects</Link>
        </div>
      </nav>
    </div>
  );
}
