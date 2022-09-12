import React, { Fragment } from "react";
import Button from "../../UI/Navigation/Button/Button";

import Navigation from "../../UI/Navigation/Navigation";
import img from "../../Images/Hero.png";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <Navigation />
      <div id="home" className={styles.hero}>
        <div className={styles.main}>
          <h1>
            Don't worry, we've <span>Gotya</span> covered...
          </h1>
          <div>
            <h2>Plumbing Solutions</h2>
            <Button text="Get a Quote" href="#contact"></Button>
          </div>
        </div>
        <img className={styles.img} src={img}></img>
      </div>
    </Fragment>
  );
};

export default Hero;
