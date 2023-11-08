import './Portfolio.css'; 

function Portfolio() {
  const projects = [
    {
      title: 'Regex URL Validation Tutorial in JavaScript',
      description: 'This repository contains a detailed tutorial on how to use a Regular Expression (Regex) for URL validation in JavaScript. The tutorial breaks down a specific regex pattern used for URL validation, explaining each component and its function in the pattern.',
      imageUrl: '../assets/images.png',
      liveUrl: 'https://github.com/Nagaft/regex-validation-URLshttp://liveurl.com', 
      codeUrl: 'https://github.com/Nagaft/regex-validation-URLs' 
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
