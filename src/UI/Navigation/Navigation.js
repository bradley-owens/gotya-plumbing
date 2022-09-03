import React from "react";
import Logo from "../../Images/Logo.png";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <img className={styles.img} src={Logo}></img>
      <div className={styles.links}>
        <a href="/">Services</a>
        <a href="/">Location</a>
        <a href="/">Reviews</a>
      </div>
      <div>
        <a className={styles.contact} href="/">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
