import "../styles/globals.css";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Flexdevs Technologies</title>
      </Helmet>

      <section className="page-hero">
        <h1>
          Let’s <span>Collaborate and Build</span> Something Great
        </h1>
        <p>
          Ready to take your business to the next level? Reach out — our team
          will fuel your vision with cutting-edge frontend design.
        </p>
      </section>

      <section className="contact-section">
        <form
          action="https://formspree.io/f/xyznqabc" // Replace with your real endpoint if needed
          method="POST"
          className="contact-form hover-animate"
        >
          {/* Full Name */}
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@business.com"
            required
          />

          {/* ✅ Mobile Number */}
          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            required
          />

          {/* Message */}
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="hero-btn primary">
            Send Message 🚀
          </button>
        </form>
      </section>
    </>
  );
}
