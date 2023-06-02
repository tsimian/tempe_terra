import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="copy">
        <span>Tempe Terra</span> &copy;
        <span className="year">{new Date().getFullYear()}</span>
      </div>
      <div className="socials">
        <ul>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Mail</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
