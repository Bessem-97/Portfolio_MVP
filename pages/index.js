// import Image from 'next/image'
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Contact from '../components/Contact';
import Head from 'next/head';

import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kieran Gill | Portfolio</title>
        <meta name="keywords" content="Kieran Gill Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <Heading />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}
