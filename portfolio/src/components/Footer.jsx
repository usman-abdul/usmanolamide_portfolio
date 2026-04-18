import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} — Data Analyst Portfolio</p>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
