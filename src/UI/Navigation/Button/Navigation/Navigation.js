import React from "react";
import Logo from "../../Images/Logo.png";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <img className={styles.img} src={Logo}></img>
      <div className={styles.links}>
        <a className={styles.link} href="/">
          Services
        </a>
        <a className={styles.link} href="/">
          Location
        </a>
        <a className={styles.link} href="/">
          Reviews
        </a>
      </div>
      <div>
        <Button text="Contact" href="/"></Button>
      </div>
    </nav>
  );
};

export default Navigation;
