// import MatchGame from '../public/port pics/match-game.PNG';
// import Recipe from '../public/port pics/recipe.PNG';
// import Bandits from '../public/port pics/Band-its.PNG';
// import StudyBudz from '../public/port pics/studybudz.PNG';
import Portfolio from '../Images/port-pics/portfolio-site.PNG';
import Untrodden from '../Images/port-pics/untrodden.PNG';
// import eLearning from '../public/port pics/Skilled e-learning landing page.png';
import formComp from '../Images/port-pics/screenshot-form.png';
import GithubUserSearchApp from '../Images/port-pics/darkmode-screenshot.png';
import SunnySide from '../Images/port-pics/sunyside-pic.png';
import timeTrackingDash from '../Images/port-pics/time-tracker.png';

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
    image: GithubUserSearchApp,
    projectTitle: 'Github User Search App',
    description:
      'A React-based web application that allows users to search for GitHub users by username and view their profiles. The app leverages the GitHub API to fetch user data and includes responsive design, error handling, and a dark mode theme feature. ',
    linkToSite: `https://kieran-gill-github-user-search-app-vite.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/githubUserSearchApp-vite`,
  },
  {
    image: SunnySide,
    projectTitle: 'Sunnyside Agency Landing Page',
    description:
      'A fully responsive landing page for a fictional agency, built with HTML and CSS; utilising grid and flexbox. I used a Figma design brief from FrontendMentors.io. The aim was to match the original design brief as closely as possible.',
    linkToSite: `https://kieran-gill-sunny-side-landing-page.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/FEMentors--SunnySide-landing-Page/tree/main`,
  },
  {
    image: timeTrackingDash,
    projectTitle: 'Time tracking dashboard',
    description:
      'A fully responsive time tracking dashboard for a fictional app. A very simple project that I initially built in Vanilla JS and then rebuilt in React. It was a good stepping stone project, that helped me grasp the fundamentals of React as well as some good practice with CSS grid.',
    linkToSite: `https://kieran-gill-time-tracking-dashboard-react.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/time-tracking-dashboard-react`,
  },

  {
    image: Portfolio,
    projectTitle: 'Portfolio MVP',
    description:
      'Created with Nextjs, my main aim for this project was to get a presentable version of it ready by the School of Code’s graduation event. Thus, It might not have all the bells and whistles that I would like, but I think it gets the job done and is fully responsive for desktop, mobile and tablet. ',
    linkToSite: `https://kieran-gill-portfolio.netlify.app`,
    linkToRepo: `https://github.com/KieranWebDev/Portfolio-MVP`,
  },
  // {
  //   image: eLearning,
  //   projectTitle: `E-learning landing Page`,
  //   description:
  //     'A fully responsive simple landing page for a fictional e-learning site, created with HTML and CSS. I used a figma design brief from FrontendMentors.com. The aim was to match the original design brief as closely as possible',
  //   linkToSite: `https://kieran-gill-e-learning-landing-page.vercel.app/`,
  //   linkToRepo: `https://github.com/KieranWebDev/FEMentors-eLearningLandingPage/blob/main/README.md`,
  // },
  {
    image: formComp,
    projectTitle: `form-component`,
    description:
      'A simple component build vith vanilla JS, HTML and CSS using a design brief provided by FrontendMentors.com. It was a great chance to practice client-side validation using Javascript. I expanded on the design brief a bit by adding a "success" message as well as UI elements to let the user know if their input was accepted as well as rejected.',
    linkToSite: `https://kieran-gill-intro-component-sign-up.vercel.app/`,
    linkToRepo: `https://github.com/KieranWebDev/FEMentors-introComponentSignUp`,
  },

  // {
  //   image: Recipe,
  //   projectTitle: 'Recipe Site',
  //   description:
  //     'A recipe site built with React, Firebase and React Router. The user can create, edit and delete recipes. There is also a dark mode switch which allowed me to learn more about the useContext and useReducer hooks. ',
  //   linkToSite: `https://kieran-gill-recipe-site.vercel.app/`,
  //   linkToRepo: `https://github.com/KieranWebDev/RecipeDirectory-ReactAndFirebase`,
  // },
  // {
  //   image: MatchGame,
  //   projectTitle: 'Matching Pairs',
  //   description:
  //     'A simple pelmanism game I built with React as part of a Udemy course. It helped me to cement some of the React fundamentals and I was also able to learn a few new CSS tricks along the way.',
  //   linkToSite: `https://kieran-gill-matching-pairs-game.vercel.app/`,
  //   linkToRepo: `https://github.com/KieranWebDev/matching-pairs-game`,
  // },
];
export default projects;
