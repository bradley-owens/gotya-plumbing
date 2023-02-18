import React, { useState, useEffect } from "react";
import Logo from "../../Images/Logo.png";

import styles from "./Navigation.module.css";

const Navigation = ({ show }) => {
  const [navState, setNavState] = useState(false);
  const toggleMobileNav = () => {
    setNavState(!navState);
  };

  return (
    <nav className={styles.nav}>
      <img className={styles.img} alt="logo" src={Logo}></img>
      <div className={navState ? styles.open : styles.links}>
        <a className={styles.link} href="#home">
          Home
        </a>
        <a className={styles.link} href="#about">
          About
        </a>
        <a className={styles.link} href="#services">
          Services
        </a>
        <a className={styles.link} href="#contact">
          Contact
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMobileNav}>
        <div
          className={navState ? styles["opened-hamburger1"] : styles.line}
        ></div>
        <div
          className={navState ? styles["opened-hamburger2"] : styles.line}
        ></div>
        <div
          className={navState ? styles["opened-hamburger3"] : styles.line}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;
