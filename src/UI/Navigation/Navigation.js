import React from "react";
import Logo from "../../Images/Logo.png";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.img} alt="logo" src={Logo}></img>
      <div className={styles.links}>
        <a className={styles.link} href="#home">
          Home
        </a>
        <a className={styles.link} href="#about">
          About
        </a>
        <a className={styles.link} href="#services">
          Services
        </a>
      </div>
      <button text="Contact" href="#contact">
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
