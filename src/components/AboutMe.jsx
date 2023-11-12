import './AboutMe.css'; 
import myImage from '../assets/photo_5148059169943825672_y.jpg';


function AboutMe() {
  return (
    <main>
    <section className="about-me">
      <h2>About Me</h2>
      <div className="content">
        <img src={myImage} alt="Noe" className="profile-image" />
        <div className="bio">
          <p>Hello! I'm Noé García. I specialize in Web developmen. I&aposm passionate about programing and am always looking for new challenges and opportunities to learn and grow.</p>
          <p>Here you can find some of my portfolio pieces, and feel free to contact me if you&aposre looking for someone with my skills and background. I&aposm always open to discussing new projects or opportunities for collaboration.</p>
        </div>
      </div>
    </section>
    </main>
  );
}

export default AboutMe;
