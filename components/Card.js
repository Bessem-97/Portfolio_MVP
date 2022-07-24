import Image from 'next/image';
import PlaceholderImg from '../Images/placeholder- projects.JPG';

export default function Card() {
  return (
    <div className="project-card-standard">
      <div className="card-top-standard">
        <Image
          className="project-image"
          src={PlaceholderImg}
          alt="project"
          width={800}
          height={300}
        ></Image>
      </div>
      <div className="card-bottom-standard">
        <h3>Project Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          reiciendis cumque veniam ipsum sed labore. A nulla veritatis
          perspiciatis dolorem, accusantium, doloremque minus numquam suscipit
          deleniti ducimus ipsum totam officia.
        </p>
        <div className="button-container">
          <button className="btn-main">Visit Site</button>
          <button className="btn-secondary">Github repo</button>
        </div>
      </div>
    </div>
  );
}
