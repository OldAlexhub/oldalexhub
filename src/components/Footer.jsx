import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="contact-info">
          Contact us:{" "}
          <a href="mailto:info@oldalexhub.com">info@oldalexhub.com</a>
        </p>
        <p className="copyright">
          &copy; {year} Old Alex Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
