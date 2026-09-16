import { site } from "../data/site.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">{site.name}</p>
        <p className="footer__copy">
          © {year}_All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
