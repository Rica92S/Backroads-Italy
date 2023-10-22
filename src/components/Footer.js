import React from "react";
import { socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
