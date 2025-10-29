import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Let’s connect! Feel free to reach out for collaborations, projects, or just to say hello 😊</p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p><a href="mailto:sunainabhatoy@gmail.com">sunainabhatoy@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+91XXXXXXXXXX">+91 8725805881</a></p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Ludhiana, Punjab, India</p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/sunainabhatoy" target="_blank" rel="noopener noreferrer">
              github.com/sunainabhatoy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
