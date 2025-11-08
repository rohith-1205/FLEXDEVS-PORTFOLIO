import { Helmet } from 'react-helmet-async'
import Section from '../components/Section'

const projects = [
  {
    title: 'TastyBuddy — Smart Food Delivery Platform',
    tag: 'Portfolio Website + UI Engineering',
    summary:
      'TastyBuddy connects local cloud kitchens with customers through a dynamic and modern React-based web interface. The platform includes menu personalization, live delivery tracking, and restaurant portfolio microsites. We designed the frontend architecture to be scalable, responsive, and highly optimized for SEO and fast load times, enabling seamless integration with small food businesses.',
  },
  {
    title: 'Every Rupee — Student Microfinance App',
    tag: 'Frontend + UI/UX Design',
    summary:
      'Every Rupee is a P2P micro-loan web platform designed for college students. We crafted a sleek, intuitive UI using React and styled components to make financial data easy to digest. The design emphasizes accessibility and trust, with dashboards for loan tracking, repayment analytics, and smart reminders. The result is a frictionless financial experience for young users.',
  },
  {
    title: 'AI-Enabled Hydrogen Mobility Dashboard',
    tag: 'Data Visualization + React + REST APIs',
    summary:
      'Built as part of a sustainability initiative, this dashboard visualizes real-time hydrogen fleet analytics using AI-driven insights. We implemented map visualizations, predictive maintenance alerts, and vehicle performance graphs. The frontend, developed in React and integrated with REST APIs, delivers real-time data streaming with smooth animations and responsive design for industrial and policy users.',
  },

]

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Our Work — Flexdevs Technologies</title>
      </Helmet>

      <Section
        title="Our Work"
        subtitle="Explore how we’ve helped startups and enterprises build beautiful, scalable web experiences."
      >
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tag">{p.tag}</p>
              <p className="project-summary">{p.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
