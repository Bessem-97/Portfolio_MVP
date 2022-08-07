import Image from 'next/image';
//profile pics
import Dori from '../Images/dori - square.JPG';
import Porto from '../Images/porto square.JPG';
import Shirt from '../Images/shirt 2.JPG';
import PicBar from '../Images/pic 4.JPG';
//icons
import HTML from '../Images/icons/akar-icons_html-fill.png';
import CSS from '../Images/icons/akar-icons_css-fill.png';
import JS from '../Images/icons/Vector.png';
import React from '../Images/icons/bxl_react.png';
import Next from '../Images/icons/akar-icons_nextjs-fill.png';
import Firebase from '../Images/icons/bxl_firebase.png';
import NodeJs from '../Images/icons/akar-icons_node-fill.png';
import Postgres from '../Images/icons/akar-icons_postgresql-fill.png';
import Github from '../Images/icons/akar-icons_github-fill.png';
import Git from '../Images/icons/fa-brands_git-square.png';
import Figma from '../Images/icons/bxl_figma.png';
import TypeScript from '../Images/icons/logos_typescript-icon.png';

export default function Main() {
  return (
    <div className="page-width">
      <main className="main-grid-container">
        <section className="top-section about-me">
          <h2>About me</h2>
          <p>
            I began coding during the COVID lockdown and quickly fell in love
            with it after I managed to center my first div. Since then I have
            been on an exciting learning journey full of exhilarating peaks and
            character-building troughs. I love the joys of sharing the wins and
            small triumphs with my teams and coding partners, as we move towards
            our common goals.
          </p>
          <p>
            My hobbies include running, resistance training, reading, gaming and
            playing fetch with my favourite canine, Dori. I enjoy travelling and
            exploring new worlds, but to be honest, as I get deeper into my
            thirties, my perfect evening simply involves lounging on a sofa
            whilst watching a good movie with my girlfriend.
          </p>
          {/* <p>
            My hobbies include running, resistance training, reading, gaming and
            playing fetch with my favourite canine, Dori. I enjoy travelling and
            exploring new worlds, but to be honest, as I get deeper into my
            thirties, my perfect evening simply involves lounging on a sofa
            whilst watching a good movie with my girlfriend.
          </p> */}
          <button className="btn-main">View my Resume</button>
        </section>
        <section className="top-section picture-container">
          <div className="pic-grid">
            <Image
              className="profile-pics"
              src={Shirt}
              alt="shirt-pic"
              height={200}
              width={220}
            />
            <Image
              className="profile-pics"
              src={Porto}
              alt="shirt-pic"
              height={200}
              width={220}
            />
            <Image
              className="profile-pics"
              src={PicBar}
              alt="shirt-pic"
              height={200}
              width={220}
            />
            <Image
              className="profile-pics"
              src={Dori}
              alt="shirt-pic"
              height={200}
              width={220}
            />
          </div>
        </section>
        <section className="top-section hundred-days">
          <h2>#100DaysofCode</h2>
          <p>
            I have been taking part in the 100 days of code challenge and have
            been keeping a regular (usually daily) diary of my progress on
            Github.
          </p>
          <p>
            If you are interested in reading it you can find it by clicking on
            the link below.
          </p>
          <button className="btn-main">
            <a
              href="https://github.com/KieranWebDev/100-Days-Of-Code-Diary-School-of-Code-Bootcamp-Diary"
              target="_blank"
              rel="noreferrer"
            >
              Read my Diary
            </a>
          </button>
        </section>
        <section className="top-section toolbox">
          <h2>My Toolbox</h2>
          <p>
            I don’t have equal proficiency in all of these areas but, I am more
            than willing to learn and get stuck in!
          </p>
          <div className="toolbox-grid-container">
            <Image
              className="icon"
              src={HTML}
              alt="HTML icon"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={CSS}
              alt="CSS"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={JS}
              alt="JS"
              width={85}
              height={85}
            ></Image>
            <Image
              className="icon"
              src={React}
              alt="React"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Next}
              alt="Next"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Firebase}
              alt="Firebase"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={NodeJs}
              alt="NodeJs"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Postgres}
              alt="Postgres"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Github}
              alt="Github"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Git}
              alt="Git"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={Figma}
              alt="Figma"
              width={90}
              height={90}
            ></Image>
            <Image
              className="icon"
              src={TypeScript}
              alt="TypeScript"
              width={85}
              height={85}
            ></Image>
          </div>
        </section>
        <div id="projects"></div>
      </main>
    </div>
  );
}
