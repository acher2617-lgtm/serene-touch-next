import Image from 'next/image';

const services = [
  {
    title: 'Signature Relaxation Massage',
    description:
      'A calming full-body massage designed to lower stress, improve circulation, and help you fully reset.',
    duration: '60 / 90 minutes',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Deep Tissue Recovery',
    description:
      'Focused pressure and muscle work for stubborn tension, stiffness, and recovery after demanding days or training.',
    duration: '60 / 90 minutes',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Hot Stone Ritual',
    description:
      'Warm stone therapy paired with slow, grounding techniques to soften tension and create deeper relaxation.',
    duration: '75 minutes',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Couples Escape',
    description:
      'A shared massage experience for partners or friends who want to unwind in a calming, elevated setting.',
    duration: '60 minutes',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop&q=80',
  },
];

const benefits = [
  'Quiet private treatment rooms with a refined spa atmosphere',
  'Licensed massage therapists who tailor every session',
  'Thoughtful add-ons and calming rituals for a premium feel',
  'Simple online booking with flexible appointment times',
];

const testimonials = [
  {
    quote:
      'From the moment I walked in, everything felt intentional and calming. Easily one of the best massage experiences I have had in Denver.',
    name: 'Emily R.',
  },
  {
    quote:
      'The space is beautiful, the therapist listened carefully, and I left feeling noticeably lighter in both body and mind.',
    name: 'Jordan M.',
  },
  {
    quote:
      'Serene Touch feels elevated without being intimidating. It has become part of my monthly wellness routine.',
    name: 'Sofia L.',
  },
];

const faqs = [
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Arrive a few minutes early, complete a brief intake, and your therapist will tailor the session to your goals, comfort level, and preferred pressure.',
  },
  {
    question: 'Do you offer customized treatments?',
    answer:
      'Yes. Sessions can be adjusted around tension points, stress relief, recovery needs, and overall wellness goals.',
  },
  {
    question: 'Is online booking available?',
    answer:
      'Yes. This template is ready for your preferred booking link so guests can reserve appointments anytime.',
  },
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
              <small>Massage &amp; Wellness Studio</small>
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

      {/* ───── HERO ───── */}
      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Luxury wellness in Denver, Colorado</p>
            <h1>Restore calm, release tension, and come back to yourself.</h1>
            <p className="hero-text">
              Serene Touch is a premium massage and wellness studio created for
              clients who value expert care, quiet luxury, and a deeply
              restorative experience.
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

          <div className="hero-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=720&h=960&fit=crop&q=80"
              alt="Calm spa interior with warm lighting and natural materials"
              width={720}
              height={960}
              priority
              className="hero-image"
            />
            <div className="hero-price-badge">
              <span>From</span>
              <strong>$120</strong>
              <small>/ 60 min</small>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Curated treatments</p>
            <h2>Massage services crafted around how you want to feel.</h2>
            <p>
              Every session is tailored with intention, whether you need deep
              recovery, quiet relaxation, or a reset from the pace of daily
              life.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
                <p className="service-duration">{service.duration}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── EXPERIENCE ───── */}
      <section className="section" id="experience">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">The Serene Touch difference</p>
            <h2>An experience that feels peaceful from start to finish.</h2>
            <p className="section-copy">
              We designed every detail to help guests slow down. From the
              atmosphere to the personalized care, each visit is meant to feel
              effortless, refined, and deeply restorative.
            </p>

            <ul className="benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="experience-visual">
            <Image
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=640&h=480&fit=crop&q=80"
              alt="Spa treatment room with candles and warm ambiance"
              width={640}
              height={480}
              className="experience-image"
            />
            <div className="info-card-stack">
              <div className="info-card info-card-primary">
                <p>Studio Hours</p>
                <strong>Mon–Sat · 9:00 AM – 8:00 PM</strong>
                <span>Sunday appointments available by request</span>
              </div>
              <div className="info-card">
                <p>Location</p>
                <strong>Cherry Creek, Denver</strong>
                <span>
                  Convenient access in a private, comfortable setting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── GALLERY STRIP ───── */}
      <section className="gallery-strip">
        <div className="gallery-track">
          {[
            'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=480&h=320&fit=crop&q=80',
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=480&h=320&fit=crop&q=80',
            'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=480&h=320&fit=crop&q=80',
            'https://images.unsplash.com/photo-1552693673-1bf958298935?w=480&h=320&fit=crop&q=80',
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Studio atmosphere ${i + 1}`}
              width={480}
              height={320}
              className="gallery-image"
            />
          ))}
        </div>
      </section>

      {/* ───── REVIEWS ───── */}
      <section className="section section-soft" id="reviews">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Client love</p>
            <h2>What guests appreciate most about their visit.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
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

      {/* ───── CTA ───── */}
      <section className="section cta-section" id="contact">
        <div className="container cta-shell">
          <div>
            <p className="eyebrow">Reserve your moment of calm</p>
            <h2>Book a restorative session with Serene Touch.</h2>
            <p className="section-copy">
              Add your live booking URL, phone number, email, and address here.
              The layout is already prepared for a real business launch.
            </p>
          </div>

          <div className="contact-card">
            <div>
              <span>Call</span>
              <a href="tel:+13035551234">(303) 555-1234</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:hello@serenetouchdenver.com">
                hello@serenetouchdenver.com
              </a>
            </div>
            <div>
              <span>Visit</span>
              <p>245 Fillmore St, Denver, CO 80206</p>
            </div>
            <a
              href="https://example.com"
              className="button button-primary full-width"
            >
              Open Booking Page
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-shell">
          <p>&copy; 2026 Serene Touch. All rights reserved.</p>
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
