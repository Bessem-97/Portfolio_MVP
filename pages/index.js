// import Image from 'next/image'
import Heading from '../components/heading';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Main />
    </div>
  );
}
