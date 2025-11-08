import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio — Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          Projects That <span>Drive Business Growth</span>
        </h1>
        <p>
          Our work focuses on turning digital potential into real results —
          transforming small brands into online powerhouses.
        </p>
      </section>

      <section className="cards-grid">
        {[
          {
            name: "TastyBuddy",
            desc: "A web platform for cloud kitchens to simplify orders and boost visibility through smart portfolio sites.",
          },
          {
            name: "Every Rupee",
            desc: "Peer-to-peer micro-loan app designed to empower students with easy financial access.",
          },
          {
            name: "FlexDash",
            desc: "A modern analytics dashboard that gives small businesses powerful insights and control.",
          },
        ].map((p, i) => (
          <div key={i} className="info-card hover-animate">
            <h3>🚀 {p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
