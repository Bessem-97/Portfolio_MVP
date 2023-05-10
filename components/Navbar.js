import Link from 'next/link';

import { useState } from 'react';

import Hamburger from '../Images/icons/navIcons/icon-hamburger.svg';
import Close from '../Images/icons/navIcons/icon-close.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={isOpen ? 'mobile-menu' : ''}>
      <div className="logo-and-hamburger">
        <h3>Kieran Gill</h3>
        <button onClick={toggleMenu} className="hamburger">
          <img src={isOpen ? Close : Hamburger} alt="menu button" />
        </button>
      </div>
      <ul className={isOpen ? 'mobile-links' : 'desktop-links'}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}

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
