import { Helmet } from 'react-helmet-async'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../lib/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — FLEXDEVS TECHNOLOGIES</title>
      </Helmet>
      <Section title="What We Offer" subtitle="Everything you need to ship beautiful, performant frontends.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '20px' }}>
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>
    </>
  )
}
