import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} Usman Olamide</p>
        <div className="footer__links">
          <a href="https://github.com/usman-abdul" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/olamide-usman-632697240/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:usmanolamide233@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
