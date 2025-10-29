import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>
          Hi, I’m <span className="highlight">Sunaina</span> 👋
        </h1>
        <h2>Web Developer | React | PHP | WordPress</h2>
        <p>
          I’m a creative and detail-oriented web developer passionate about building modern,
          responsive, and visually engaging websites. I combine technical precision with clean
          design to create smooth and user-friendly digital experiences.
        </p>
        <p>
          From front-end interfaces in <strong>React</strong> to dynamic back-end solutions in
          <strong> PHP</strong> and <strong>WordPress</strong>, I love transforming ideas into
          reality that perform beautifully across devices.
        </p>

       
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary-btn">Explore Projects</Link>
          <Link to="/contact" className="btn secondary-btn">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
