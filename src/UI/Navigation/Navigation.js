import React from "react";
import Logo from "../../Images/Logo.png";
import Services from "../../Layout/Services/Services";
import Button from "./Button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <img className={styles.img} src={Logo}></img>
      <div className={styles.links}>
        <a className={styles.link} href="#services">
          Services
        </a>
        <a className={styles.link} href="#reviews">
          Reviews
        </a>
        <a className={styles.link} href="/">
          Gallery
        </a>
      </div>
      <div>
        <Button text="Contact" href="/"></Button>
      </div>
    </nav>
  );
};

export default Navigation;
