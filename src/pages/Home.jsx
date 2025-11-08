import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import LogoCloud from '../components/LogoCloud'
import { SERVICES } from '../lib/services'
import heroLogo from '../assets/logo.png'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies — Frontend Engineering & UI/UX</title>
      </Helmet>

      {/* ==== HERO SECTION ==== */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="h1">We Build Beautiful & Scalable Interfaces</h1>
            <p className="lead">
              Expertly crafted business portfolio websites, modern UI development, and seamless user experiences.
            </p>

            <div className="hero-buttons">
              <Button to="/contact">Get Started</Button>
              <Button to="/portfolio" type="outline" style={{ marginLeft: '10px' }}>
                View Work
              </Button>
            </div>
          </div>

          {/* Smaller and aligned logo image */}
          <div className="hero-logo">
            <img
              src={heroLogo}
              alt="Flexdevs Technologies Logo"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* ==== SERVICES SECTION ==== */}
      <Section title="Our Services" subtitle="End-to-end frontend engineering and design.">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* ==== CLIENT SECTION ==== */}
      <Section
        title="Trusted By"
        subtitle="Startups & SMEs around the world rely on us for UI excellence."
      >
        <LogoCloud />
      </Section>

      {/* ==== CTA SECTION ==== */}
      <Section
        title="Ready to Launch?"
        subtitle="Tell us about your project. We’ll help you go from idea to product."
      >
        <Button to="/contact">Start Your Project</Button>
      </Section>
    </>
  )
}
