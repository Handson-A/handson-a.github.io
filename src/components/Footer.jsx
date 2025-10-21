function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Handson Ayelgum</p>
        <p className="footer-sub"><i>Building secure, reliable and testable software.</i></p>
      </div>
    </footer>
  );
}

export default Footer;
