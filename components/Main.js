import Image from 'next/image';
import Dori from '../Images/dori - square.JPG';
import Porto from '../Images/porto square.JPG';
import Shirt from '../Images/shirt 2.JPG';
import PicBar from '../Images/pic 4.JPG';

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
      </section>
    </main>
  );
}
