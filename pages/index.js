// import Image from 'next/image'
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Main />
      <Projects />
    </div>
  );
}
