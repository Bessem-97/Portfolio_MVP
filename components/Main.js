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
    <main className="main-grid-container">
      <section className="about-me">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          facilis impedit ab doloremque necessitatibus architecto fugiat commodi
          optio voluptatum, debitis, blanditiis quod ducimus iste incidunt,
          distinctio laborum excepturi! Possimus delectus omnis, doloremque quia
          nostrum nihil vel eaque accusamus et asperiores iure ab recusandae in
          debitis, quaerat ut incidunt velit nemo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui quae
          ad quas aliquam cumque sapiente fugit dolore doloremque quis.
        </p>
        <button className="btn-main">View my Resume</button>
      </section>
      <section className="picture-container">
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
      <section className="hundred-days">
        <h2>#100DaysofCode</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          rerum tenetur architecto perferendis vitae! Ipsam possimus architecto,
          similique autem, eum tempore est iusto dolore obcaecati asperiores
          dolorem nesciunt soluta ipsa!
        </p>
        <button className="btn-main">Read my Diary</button>
      </section>
      <section className="toolbox">
        <h2>My Toolbox</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vitae!
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
    </main>
  );
}
