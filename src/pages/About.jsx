import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          We <span>Design Success</span> for Every Business
        </h1>
        <p>
          At Flexdevs Technologies, we help small businesses thrive digitally
          through exceptional frontend design and engineering expertise.
        </p>
      </section>

      <section className="cards-grid">
        <div className="info-card hover-animate">
          <h3>🌍 Our Vision</h3>
          <p>
            To empower every brand — big or small — with a web presence that
            builds trust, scales effortlessly, and leaves a mark.
          </p>
        </div>

        <div className="info-card hover-animate">
          <h3>💪 Our Approach</h3>
          <p>
            We merge creativity, performance, and strategy — delivering designs
            that look great and perform even better.
          </p>
        </div>

        <div className="info-card hover-animate">
          <h3>🤝 Our Clients</h3>
          <p>
            From local startups to emerging enterprises, we partner with
            businesses who believe in meaningful design and innovation.
          </p>
        </div>
      </section>
    </>
  );
}
