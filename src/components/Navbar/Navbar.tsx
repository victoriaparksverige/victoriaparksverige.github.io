import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SkunkLogo } from "../../assets/skunk.svg";
import { ReactComponent as InfoLogo } from "../../assets/info.svg";
import "./Navbar.scss";

const NavigationMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu-links">
        <a
          rel="noreferrer"
          target="_blank"
          className="menu-item"
          href="https://www.google.se/maps/place/Victoria+Park+AB/@55.6118753,12.9844819,17z/data=!4m7!3m6!1s0x4653a6e56d0b219b:0xe4e263680d094e51!8m2!3d55.6118723!4d12.9866706!9m1!1b1"
        >
          Vad tycker hyresgäster?
        </a>
      </div>
      <div className="nav-menu-buttons">
        <button>
          <InfoLogo />
          <a href="mailto:victoria-park-sverige@outlook.com">KONTAKT</a>
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="top-nav" to="/">
        <SkunkLogo />
        <span className="logo-text">VICTORIA PARK</span>
      </Link>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;
