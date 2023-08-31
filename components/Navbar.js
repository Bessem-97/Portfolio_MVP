import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import Hamburger from '../Images/icons/navIcons/icon-hamburger.svg';
import Close from '../Images/icons/navIcons/icon-close.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="nav-container">
      <nav className={isOpen ? 'mobile-menu' : ''}>
        <div className="logo-and-hamburger">
          <div className="name-and-contact-container">
            <h3>Kieran Gill</h3>
            <Link href="#contact">Contact me</Link>
          </div>
          <button onClick={toggleMenu} className="hamburger">
            <Image src={isOpen ? Close : Hamburger} alt="menu button" />
          </button>
        </div>
        <ul className={isOpen ? 'mobile-links' : 'desktop-links'}>
          <li onClick={toggleMenu} className="hidden-list-item">
            <Link href="#contact">Contact me</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/15RnjY507uYFbueHRdEmRD6pGOIwu5EW8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KieranWebDev"
              target="_blank"
              rel="noreferrer"
            >
              Github Repos
            </a>
          </li>

          <li onClick={toggleMenu}>
            <Link href="#about-me">About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
// PREVIOUS NAVBAR CODE
// <div className="nav-full-width">
//   <nav className="nav-container">
//     <div className="nav-left">
//       <h3>Kieran Gill</h3>
//       <Link href="#contact">Contact me</Link>
//     </div>
//     <div className="nav-right">
//       <a
//         href="https://github.com/KieranWebDev"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Github Repos
//       </a>

//       <a
//         href="https://drive.google.com/file/d/1Kg5LkrDOL_fEDUsl0V1TUa62upXkjl55/view?usp=sharing"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Resume
//       </a>
//       <Link href="#about-me">About Me</Link>
//       <Link href="#projects">Projects</Link>
//     </div>
//   </nav>
// </div>
