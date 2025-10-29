function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* 1️⃣ About Me */}
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
            I’m <strong>Sunaina Bhatoy</strong>, a B.Tech CSE graduate from the class of 2024.
            I’m a passionate web developer who loves building creative, functional, and
            performance-driven digital experiences. My journey in tech has helped me grow from
            designing basic layouts to developing full-scale responsive websites and web apps.
          </p>
          <p>
            I’m a quick learner, detail-oriented, and enjoy exploring new technologies. I value
            teamwork, clean design, and problem-solving — traits that help me create efficient,
            user-friendly solutions. I’m also deeply interested in search optimization and user
            experience, which is why I focus on both <strong>frontend</strong> and
            <strong> SEO</strong> together.
          </p>
        </div>

        {/* 2️⃣ Education Timeline */}
        <div className="education-section">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
             
              <div className="timeline-content">
                <h3>B.Tech in Computer Science & Engineering</h3>
                <p><strong>Graduated:</strong> 2024</p>
                 <p><strong>CGPA:</strong> 8.5</p>
                  <p><strong>University:</strong> Punjab Technical University</p>
                <p>Focused on web development, data management, and emerging technologies.</p>
              </div>
            </div>
           
             <div className="timeline-item">
           
              <div className="timeline-content">
                <h3>Higher Secondary Education</h3>
                <p><strong>percnetage:</strong> 94%</p>
                <p><strong>School Name:</strong> Senior Secondary Residentail school for Meritorious students, LDH.</p>
                <p>Studied Physics, Chemistry, and Mathematics, building a strong logical base.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3️⃣ Skills Section */}
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-box">
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="skill-box">
              <h3>Backend</h3>
              <p>PHP, Express.js (Basics)</p>
            </div>
            <div className="skill-box">
              <h3>Databases</h3>
              <p>MySQL, DBMS, SQL Queries</p>
            </div>
            <div className="skill-box">
              <h3>CMS</h3>
              <p>WordPress, Elementor, WooCommerce</p>
            </div>
            <div className="skill-box">
              <h3>SEO</h3>
              <p>Local SEO, Website SEO, Keyword Optimization, Google Business Profile</p>
            </div>
             <div className="skill-box">
  <h3>Version Control</h3>
  <p>Git, GitHub (repos, branching, pull requests, GitHub Actions basics)</p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
