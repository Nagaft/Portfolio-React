import './Resume.css'; 

function Resume() {
  const experience = [
    {
      company: "Flextronics",
      location: "Zapopan, Jalisco",
      title: "Process Engineer Technician",
      period: "Oct 2022 – May 2023",
      duties: [
        "I explore and analyze the production processes of our company in detail, identifying areas that could be improved and seeking opportunities to increase efficiency and quality.",
        "I design innovative solutions to optimize our production processes, implementing new technologies, reorganizing workflows, and updating equipment to achieve a higher level of efficiency.",
        "I am dedicated to ensuring high-quality standards in our products or services, conducting rigorous inspections and tests, and collaborating closely with the quality control team.",
        "I am responsible for keeping our work procedures updated and documented, using diagrams and roadmaps to define each step of the process clearly.",
        "I am passionate about sharing my knowledge and experiences with the team, providing training and development to ensure everyone is up to date with the latest improvements.",
        "When problems arise in the production processes, I thoroughly investigate the root causes and seek creative and efficient solutions, working closely with other departments."
      ]
    },
];

const education = [
  {
    institution: "UNIVERSIDAD DE GUADALAJARA",
    location: "Guadalajara, Jalisco",
    degree: "Mechanical Electrical Engineer, Mechatronic",
    graduationDate: "May 2022"
  },]

  const skills = [
    "Javascript",
    "AutoCAD",
    "SolidWorks",
    "C++",
    "GitHub",
  ];


  return (
    <section className="resume">
      <h2>Resume</h2>

      <div className="experience">
      <h3>Professional Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <h4>{job.title}, {job.company}</h4>
            <p className="job-location">{job.location}</p>
            <p className="job-period">{job.period}</p>
            <ul>
              {job.duties.map((duty, dutyIndex) => (
                <li key={dutyIndex}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="education">
      <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p>{edu.institution}, {edu.location}</p>
            <p>Graduation Date: {edu.graduationDate}</p>
          </div>
        ))}
      </div>

      <div className="skills">
      <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>


      <a href="../assets/NoýGarcýaF.pdf" download className="download-resume">
        Download My Resume
      </a>
    </section>
  );
}

export default Resume;
