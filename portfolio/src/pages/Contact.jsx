import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.scss';

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/usman-olamide',
    href: 'https://linkedin.com/in/usman-olamide',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/usman-abdul',
    href: 'https://github.com/usman-abdul',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Mailto fallback, works without a backend
    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  }

  return (
    <main className="contact">
      <div className="contact__inner">

        {/* Left — info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h1>Let's Work<br />Together.</h1>
          <p>
            Open to full-time roles, freelance projects, and collaborations in
            data analytics, business intelligence, and health data research.
            Drop me a message and I'll get back to you within 24 hours.
          </p>

          <div className="contact__links">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact__link"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <div className="contact__link-icon">{link.icon}</div>
                <div className="contact__link-text">
                  <span className="label">{link.label}</span>
                  <span className="value">{link.value}</span>
                </div>
                <span className="contact__link-arrow">→</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {sent ? (
            <div className="contact__success">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Your email client should have opened. I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <h2 className="contact__form-title">Send a Message</h2>
              <p className="contact__form-sub">Fill in the form and hit send. It opens your email client.</p>

              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact__submit" disabled={loading}>
                  {loading ? 'Opening email client...' : 'Send Message →'}
                </button>
              </form>
            </>
          )}
        </motion.div>

      </div>
    </main>
  );
}
