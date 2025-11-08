import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Flexdevs Technologies</title>
      </Helmet>

      <section
        style={{
          background:
            'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(255,255,255,1) 100%)',
          padding: '80px 20px',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '900px',
            textAlign: 'center',
          }}
        >
          <h2 className="h2" style={{ color: '#1e3a8a' }}>
            Let’s Build Something Great
          </h2>

          <p
            className="lead"
            style={{
              marginTop: '10px',
              marginBottom: '40px',
              color: '#475569',
            }}
          >
            Have a project in mind? Tell us what you need and our team will reach out within 24 hours.
          </p>

          {/* ==== CONTACT FORM START ==== */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="card"
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '700px',
              margin: 'auto',
              boxShadow: '0 8px 24px rgba(37,99,235,0.1)',
              display: 'grid',
              gap: '20px',
            }}
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="61da6a0b-51b9-40c6-8fe7-43808a9002c7"
            />

            {/* Name + Email fields */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Service selection */}
            <div style={{ textAlign: 'left' }}>
              <label
                htmlFor="service"
                style={{
                  display: 'block',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '8px',
                }}
              >
                Interested Service
              </label>
              <select id="service" name="service" style={inputStyle}>
                <option>Business Portfolio Website</option>
                <option>Web Interface Design</option>
                <option>Modern UI Development</option>
                <option>UI/UX Portfolio Development</option>
                <option>Frontend Engineering</option>
              </select>
            </div>

            {/* Message box */}
            <div style={{ textAlign: 'left' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '8px',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                style={{ ...inputStyle, resize: 'vertical' }}
                required
              ></textarea>
            </div>

            {/* ✅ Redirect to React route */}
            <input type="hidden" name="redirect" value="http://localhost:5173/thank-you" />

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                fontSize: '1rem',
                letterSpacing: '0.3px',
                padding: '14px 28px',
                borderRadius: '10px',
                width: 'fit-content',
                margin: 'auto',
              }}
            >
              Send Message 🚀
            </button>
          </form>
          {/* ==== CONTACT FORM END ==== */}
        </div>
      </section>
    </>
  )
}

/* Shared input style */
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid #cbd5e1',
  outline: 'none',
  backgroundColor: '#f8fafc',
  fontSize: '1rem',
  color: '#1e293b',
  transition: 'all 0.2s ease',
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
}
