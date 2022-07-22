import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <h3>Kieran Gill</h3>
        <Link href="/">Contact me</Link>
      </div>
      <div className="nav-right">
        <Link href="/">About me</Link>
        <Link href="/">Resume</Link>
        <Link href="/">#100DaysOfCode</Link>
        <Link href="/">Projects</Link>
      </div>
    </nav>
  );
}
