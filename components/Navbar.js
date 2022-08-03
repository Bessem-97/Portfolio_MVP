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
          <Link href="/">About me</Link>
          <Link href="/">Resume</Link>
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
