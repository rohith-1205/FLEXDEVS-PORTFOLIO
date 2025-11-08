import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies — Frontend Engineering Experts</title>
      </Helmet>

      <Navbar />

      {/* ====== HOME ====== */}
      <section id="home" className="section home-section">
        <div className="hero-content">
          <h1>
            Empowering <span>Your Digital Presence</span>
          </h1>
          <p>
            We build responsive, elegant, and high-performance frontends that
            fuel your business growth.
          </p>
          <button className="hero-btn primary">Let’s Get Started 🚀</button>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section id="services" className="section">
        <h2>Our Expertise</h2>
        <p>
          FlexDevs Technologies specializes in crafting exceptional digital
          experiences — from UI/UX design to advanced frontend engineering.
        </p>
        <div className="services-grid">
          <div className="service-card hover-animate">
            <h3>Business Portfolio Websites</h3>
            <p>
              Create a lasting first impression with elegant and fast portfolio
              sites designed for impact.
            </p>
          </div>
          <div className="service-card hover-animate">
            <h3>Modern UI Development</h3>
            <p>
              From sleek animations to pixel-perfect design, we deliver cutting-edge
              modern web experiences.
            </p>
          </div>
          <div className="service-card hover-animate">
            <h3>UI/UX Strategy</h3>
            <p>
              We blend creativity and logic to design interfaces that not only look
              stunning but convert better.
            </p>
          </div>
        </div>
      </section>

      {/* ====== PORTFOLIO ====== */}
      <section id="portfolio" className="section dark-section">
        <h2>Our Work</h2>
        <p>
          Explore how we’ve powered small businesses with clean, scalable, and
          modern web applications.
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-item hover-animate">
            <h3>Solar EPC Dashboard</h3>
            <p>
              Built an intelligent management dashboard for a renewable energy
              startup improving real-time monitoring.
            </p>
          </div>
          <div className="portfolio-item hover-animate">
            <h3>Food Delivery UI Platform</h3>
            <p>
              Designed a modern interface for local food delivery businesses
              focusing on usability and speed.
            </p>
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <section id="about" className="section">
        <h2>About FlexDevs</h2>
        <p>
          We’re a team of creative frontend engineers passionate about transforming
          businesses into digital brands. With innovation and precision, we craft
          web experiences that inspire.
        </p>
      </section>

      {/* ====== CONTACT ====== */}
      <section id="contact" className="section contact-section">
        <h2>Let’s Connect</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="61da6a0b-51b9-40c6-8fe7-43808a9002c7"
          />
          <label>Full Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Mobile</label>
          <input type="tel" name="phone" required />

          <label>Message</label>
          <textarea name="message" rows="4"></textarea>

          <button type="submit" className="hero-btn primary">
            Send Message 🚀
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
