import Card from './Card';
//images
import MatchGame from '../public/port pics/match-game.PNG';
import Recipe from '../public/port pics/recipe.PNG';
import Bandits from '../public/port pics/Band-its.PNG';
import StudyBudz from '../public/port pics/studybudz.PNG';
import Portfolio from '../public/port pics/portfolio-site.PNG';
import Untrodden from '../public/port pics/untrodden.PNG';

const projects = [
  {
    image: MatchGame,
    projectTitle: 'Matching Pairs',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://kieran-gill-matching-pairs-game.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/matching-pairs-game`,
  },
  {
    image: Recipe,
    projectTitle: 'Recipe Site',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://kieran-gill-recipe-site.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/RecipeDirectory-ReactAndFirebase`,
  },
  {
    image: Bandits,
    projectTitle: 'Band-its',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://kieran-gill-recipe-site.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/w8d5_react-api-hackathon-kieran-and-glyn-week-8`,
  },
  {
    image: StudyBudz,
    projectTitle: 'StudyBudz',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://kieran-gill-week9-project.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/w9_frontend-project-room-5-front-end`,
  },
  {
    image: Portfolio,
    projectTitle: 'Portfolio MVP',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://kieran-gill-portfolio.netlify.app`,
    linkToRepo: `https://github.com/KieranWebDev/Portfolio-MVP`,
  },
  {
    image: Untrodden,
    projectTitle: 'Portfolio MVP',
    description:
      'Vel necessitatibus laboriosam ut consequatur aliquid quo quisquam mollitia ea modi natus nam error odio est nostrum minus id voluptatem nostrum. Qui dolor Quis est placeat facere eos itaque sapiente ea Quis perferendis aut alias suscipit.',
    linkToSite: `https://untrodden.netlify.app/`,
    linkToRepo: `https://github.com/KieranWebDev/Portfolio-MVP`,
  },
];

export default function Projects() {
  return (
    <section className="projects-background-settings">
      <div className="projects-width">
        <h2>My Projects</h2>
        <div className="project-grid-container">
          {projects.map((project) => (
            <Card
              key={project.title}
              image={project.image}
              title={project.projectTitle}
              description={project.description}
              linkToSite={project.linkToSite}
              linkToRepo={project.linkToRepo}
            />
          ))}

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
