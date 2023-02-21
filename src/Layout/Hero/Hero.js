import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import Navigation from "../../UI/Navigation/Navigation";
import img from "../../Images/background.jpg";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <Navigation />
      <div id="home" className={styles.hero}>
        <main>
          <div className={styles["hero-info"]}>
            <h1>
              <span>Gotya</span> Plumbing Solutions
            </h1>
            <h2>We've Gotya Covered...</h2>
            <Button text="Get a Quote" href="#contact"></Button>
          </div>
        </main>
        <div className={styles["flex-blocker"]} />
      </div>
    </Fragment>
  );
};

export default Hero;
