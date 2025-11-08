import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          Empowering <span>Businesses to Scale</span> Through Digital Design
        </h1>
        <p>
          We help startups and small businesses bring ideas to life with
          beautiful, responsive, and high-performance web experiences.
        </p>
      </section>

      <section className="cards-grid">
        {[
          {
            icon: "💼",
            title: "Business Portfolio Websites",
            desc: "Professional, conversion-ready websites designed to showcase your brand story and generate leads.",
          },
          {
            icon: "🎨",
            title: "Web Interface Design",
            desc: "Sleek and intuitive designs that make your website both visually appealing and user-friendly.",
          },
          {
            icon: "⚡",
            title: "Modern UI Development",
            desc: "We create fast, mobile-first interfaces using React — optimized for performance and growth.",
          },
          {
            icon: "🧠",
            title: "UI/UX Portfolio Development",
            desc: "Engaging portfolios that highlight your expertise and attract clients through smart presentation.",
          },
          {
            icon: "🔧",
            title: "Frontend Engineering",
            desc: "Scalable, maintainable, and pixel-perfect code that powers your business for years ahead.",
          },
        ].map((s, i) => (
          <div key={i} className="info-card hover-animate">
            <h3>{s.icon} {s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
