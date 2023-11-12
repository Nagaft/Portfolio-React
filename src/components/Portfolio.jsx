import './Portfolio.css'; 
import imgregex from '../assets/regex.png';
import imgpgen from '../assets/pgen.png';
import imgcc from '../assets/imgcc.png';
import imgjsq from '../assets/imgjsq.png';
import imgwds from '../assets/imgwds.png';


function Portfolio() {
  const projects = [
    {
      title: 'Regex URL Validation Tutorial in JavaScript',
      description: 'This repository contains a detailed tutorial on how to use a Regular Expression (Regex) for URL validation in JavaScript. The tutorial breaks down a specific regex pattern used for URL validation, explaining each component and its function in the pattern.',
      imageUrl: imgregex,
      liveUrl: 'https://github.com/Nagaft/regex-validation-URLs', 
      codeUrl: 'https://github.com/Nagaft/regex-validation-URLs' 
    },
    {
      title: 'Password Generator',
      description: 'This is a simple web application that generates secure passwords based on user preferences. It allows users to specify the length of the password and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.',
      imageUrl: imgpgen,
      liveUrl: 'https://nagaft.github.io/Password-generator/', 
      codeUrl: 'https://github.com/Nagaft/Password-generator#password-generator' 
    },
    {
      title: 'Climate Connect',
      description: 'A simple web page that allows you to search for a city and view its current and future weather conditions.',
      imageUrl: imgcc,
      liveUrl: 'https://nagaft.github.io/Climate_Connect/', 
      codeUrl: 'https://github.com/Nagaft/Climate_Connect' 
    },
    {
      title: 'Interactive Quiz',
      description: 'This project is a JavaScript quiz that tests your knowledge of JavaScript fundamentals. It presents a series of multiple-choice questions. The project also includes a timer to add a time constraint to the quiz and a high score feature to store and display the scores of previous participants.',
      imageUrl: imgjsq,
      liveUrl: 'https://nagaft.github.io/Interactive_Quiz/', 
      codeUrl: 'https://github.com/Nagaft/Interactive_Quiz' 
    },
    {
      title: 'Work Day Schedule',
      description: 'Work Day Schedule is a simple web application that allows you to schedule and manage your daily tasks. It provides an intuitive interface where you can enter and save your agenda for each hour of the work day. The application also dynamically updates the styling of each time block based on the current hour.',
      imageUrl: imgwds,
      liveUrl: 'https://nagaft.github.io/Work_Day_Schedule/', 
      codeUrl: 'https://github.com/Nagaft/Work_Day_Schedule' 
    },
  
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
