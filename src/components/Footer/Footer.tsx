import React from "react";
import "./Footer.scss";
import { ReactComponent as InstagramLogoNegative } from "../../assets/instagram-logo-negative.svg";
import { ReactComponent as FacebookLogoNegative } from "../../assets/facebook-logo-negative.svg";
import { Link } from "react-router-dom";

export interface FooterProps {}

const links: Array<{ label: string; path: string }> = [
  { label: "Välj gärna", path: "/" },
  { label: "Någon", path: "/" },
  { label: "Annan Hyresvärd", path: "/" },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>{link.label}</Link>
        ))}
      </div>
      <div className="footer-right">
        <div className="social-media-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
          >
            <InstagramLogoNegative />
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <FacebookLogoNegative />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
