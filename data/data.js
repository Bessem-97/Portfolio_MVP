import MatchGame from '../public/port pics/match-game.PNG';
import Recipe from '../public/port pics/recipe.PNG';
import Bandits from '../public/port pics/Band-its.PNG';
import StudyBudz from '../public/port pics/studybudz.PNG';
import Portfolio from '../public/port pics/portfolio-site.PNG';
import Untrodden from '../public/port pics/untrodden.PNG';

const projects = [
  {
    image: Untrodden,
    projectTitle: 'Untrodden',
    description:
      'Our final four week, full-stack project for the School of Code, made in four weeks using Nextjs, Nodejs, PostGresSQL, Mapbox, React Form Hook, Cloudinary and FormSpree. We worked in a team of five and it was an amazing experience to see the skills we have learned over the past few months culminate into this final project.',
    linkToSite: `https://untroddenapp.netlify.app/`,
    linkToRepo: `https://github.com/SchoolOfCode/final-project_front-end-untrodden`,
  },
  {
    image: StudyBudz,
    projectTitle: 'StudyBudz',
    description:
      'A full stack project created in four days in a team of four, using React, React Router, Nodejs and PostgresSQL. This was the first project I was involved in that involved a team larger than 2 people. I’m really happy with what we achieved given the time we had and the skills we processed at the time.',
    linkToSite: `https://kieran-gill-week9-project.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/w9_frontend-project-room-5-front-end`,
  },
  {
    image: Portfolio,
    projectTitle: 'Portfolio MVP',
    description:
      'Created with Nextjs, my main aim for this project was to get a presentable version of it ready by the School of Code’s graduation event. Thus, It might not have all the bells and whistles that I would like, but I think it gets the job done and is fully responsive for desktop, mobile and tablet. ',
    linkToSite: `https://kieran-gill-portfolio.netlify.app`,
    linkToRepo: `https://github.com/KieranWebDev/Portfolio-MVP`,
  },
  {
    image: Bandits,
    projectTitle: 'Band-its',
    description:
      'This was a hackathon project I made with a friend in 5 hours using React and the AudioDB API. it displays info on a band/artist based on a users search. We also had time to implement a random search feature, which allows the user to see info on a random band from the database.',
    linkToSite: `https://kieran-gill-week8-hackathon-bandits.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/w8d5_react-api-hackathon-kieran-and-glyn-week-8`,
  },
  {
    image: Recipe,
    projectTitle: 'Recipe Site',
    description:
      'A recipe site built with React, Firebase and React Router. The user can create, edit and delete recipes. There is also a dark mode switch which allowed me to learn more about the useContext and useReducer hooks. ',
    linkToSite: `https://kieran-gill-recipe-site.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/RecipeDirectory-ReactAndFirebase`,
  },
  {
    image: MatchGame,
    projectTitle: 'Matching Pairs',
    description:
      'A simple pelmanism game I built with React as part of a Udemy course. It helped me to cement some of the React fundamentals and I was also able to learn a few new CSS tricks along the way.',
    linkToSite: `https://kieran-gill-matching-pairs-game.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/matching-pairs-game`,
  },
];
export default projects;
