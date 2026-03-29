const services = [
  {
    title: 'Signature Relaxation Massage',
    description:
      'A calming full-body massage designed to lower stress, improve circulation, and help you fully reset.',
    duration: '60 / 90 minutes'
  },
  {
    title: 'Deep Tissue Recovery',
    description:
      'Focused pressure and muscle work for stubborn tension, stiffness, and recovery after demanding days or training.',
    duration: '60 / 90 minutes'
  },
  {
    title: 'Hot Stone Ritual',
    description:
      'Warm stone therapy paired with slow, grounding techniques to soften tension and create deeper relaxation.',
    duration: '75 minutes'
  },
  {
    title: 'Couples Escape',
    description:
      'A shared massage experience for partners or friends who want to unwind in a calming, elevated setting.',
    duration: '60 minutes'
  }
];

const benefits = [
  'Quiet private treatment rooms with a refined spa atmosphere',
  'Licensed massage therapists who tailor every session',
  'Thoughtful add-ons and calming rituals for a premium feel',
  'Simple online booking with flexible appointment times'
];

const testimonials = [
  {
    quote:
      'From the moment I walked in, everything felt intentional and calming. Easily one of the best massage experiences I have had in Denver.',
    name: 'Emily R.'
  },
  {
    quote:
      'The space is beautiful, the therapist listened carefully, and I left feeling noticeably lighter in both body and mind.',
    name: 'Jordan M.'
  },
  {
    quote:
      'Serene Touch feels elevated without being intimidating. It has become part of my monthly wellness routine.',
    name: 'Sofia L.'
  }
];

const faqs = [
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Arrive a few minutes early, complete a brief intake, and your therapist will tailor the session to your goals, comfort level, and preferred pressure.'
  },
  {
    question: 'Do you offer customized treatments?',
    answer:
      'Yes. Sessions can be adjusted around tension points, stress relief, recovery needs, and overall wellness goals.'
  },
  {
    question: 'Is online booking available?',
    answer:
      'Yes. This template is ready for your preferred booking link so guests can reserve appointments anytime.'
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#top" className="brand" aria-label="Serene Touch home">
            <span className="brand-mark">S</span>
            <span>
              <strong>Serene Touch</strong>
              <small>Massage & Wellness Studio</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-primary button-small">
            Book Now
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Luxury wellness in Denver, Colorado</p>
            <h1>Restore calm, release tension, and come back to yourself.</h1>
            <p className="hero-text">
              Serene Touch is a premium massage and wellness studio created for clients who value expert care,
              quiet luxury, and a deeply restorative experience.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Reserve Your Session
              </a>
              <a href="#services" className="button button-secondary">
                Explore Services
              </a>
            </div>

            <div className="hero-meta">
              <span>Licensed therapists</span>
              <span>Private treatment rooms</span>
              <span>Tailored sessions</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-label">Signature Experience</p>
              <h2>Where elevated care meets total relaxation.</h2>
              <ul>
                <li>Customized pressure and technique</li>
                <li>Aromatherapy and calming ritual touches</li>
                <li>Ideal for stress relief, recovery, and self-care</li>
              </ul>

              <div className="hero-price-box">
                <span>From</span>
                <strong>$120</strong>
                <small>for 60 minutes</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Curated treatments</p>
            <h2>Massage services crafted around how you want to feel.</h2>
            <p>
              Every session is tailored with intention, whether you need deep recovery, quiet relaxation, or a reset
              from the pace of daily life.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-duration">{service.duration}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">The Serene Touch difference</p>
            <h2>An experience that feels peaceful from start to finish.</h2>
            <p className="section-copy">
              We designed every detail to help guests slow down. From the atmosphere to the personalized care, each
              visit is meant to feel effortless, refined, and deeply restorative.
            </p>

            <ul className="benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="info-card-stack">
            <div className="info-card info-card-primary">
              <p>Studio Hours</p>
              <strong>Mon–Sat · 9:00 AM – 8:00 PM</strong>
              <span>Sunday appointments available by request</span>
            </div>
            <div className="info-card">
              <p>Location</p>
              <strong>Cherry Creek, Denver</strong>
              <span>Convenient access in a private, comfortable setting</span>
            </div>
            <div className="info-card">
              <p>Wellness Philosophy</p>
              <strong>Calm care, not rushed care</strong>
              <span>Sessions centered on presence, comfort, and long-term well-being</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="reviews">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Client love</p>
            <h2>What guests appreciate most about their visit.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">FAQ</p>
            <h2>Everything you need before you book.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contact">
        <div className="container cta-shell">
          <div>
            <p className="eyebrow">Reserve your moment of calm</p>
            <h2>Book a restorative session with Serene Touch.</h2>
            <p className="section-copy">
              Add your live booking URL, phone number, email, and address here. The layout is already prepared for a
              real business launch.
            </p>
          </div>

          <div className="contact-card">
            <div>
              <span>Call</span>
              <a href="tel:+13035551234">(303) 555-1234</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:hello@serenetouchdenver.com">hello@serenetouchdenver.com</a>
            </div>
            <div>
              <span>Visit</span>
              <p>245 Fillmore St, Denver, CO 80206</p>
            </div>
            <a href="https://example.com" className="button button-primary full-width">
              Open Booking Page
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-shell">
          <p>© 2026 Serene Touch. All rights reserved.</p>
          <div>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Book</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
