import Image from 'next/image';
import PlaceholderImg from '../Images/placeholder- projects.JPG';
export default function Projects() {
  return (
    <section className="projects-background-settings">
      <div className="projects-width">
        <h2>My Projects</h2>
        <div className="project-grid-container">
          <div className="project-card-standard">
            <div className="card-top-standard">
              <Image
                className="project-image"
                src={PlaceholderImg}
                alt="project"
                width={250}
                height={300}
              ></Image>
            </div>
            <div className="card-right-standard">
              <h3>Project Title</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, reiciendis cumque veniam ipsum sed labore. A nulla
                veritatis perspiciatis dolorem, accusantium, doloremque minus
                numquam suscipit deleniti ducimus ipsum totam officia.
              </p>
              <button className="btn-main">Visit Site</button>
              <button className="btn-main">Github repo</button>
            </div>
          </div>
          {/* <div className="project-card-standard">
            <Image src={PlaceholderImg} alt="project"></Image>
            <h3>Project Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              reiciendis cumque veniam ipsum sed labore. A nulla veritatis
              perspiciatis dolorem, accusantium, doloremque minus numquam
              suscipit deleniti ducimus ipsum totam officia.
            </p>
            <button className="btn-main">Visit Site</button>
            <button className="btn-main">Github repo</button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
