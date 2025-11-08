import { Helmet } from 'react-helmet-async'
import Section from '../components/Section'

export default function About() {
  return (
    <>
      <Helmet><title>About — FLEXDEVS TECHNOLOGIES</title></Helmet>
      <Section title="About Us" subtitle="Ship delightful, accessible, and fast interfaces for businesses.">
        <p>We’re a frontend-focused studio specializing in React applications, portfolio websites, and UI/UX experiences. Our work balances design taste with engineering rigor.</p>
        <p>From MVPs to polished marketing sites, we partner closely with founders and teams to launch quickly and iterate with data.</p>
      </Section>
    </>
  )
}
