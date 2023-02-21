import React, { useState } from "react";
import styles from "./About.module.css";
import aboutImg from "../../Images/about.jpg";
import BathroomRenovation from "../../Icons/BathroomRenovation.svg";
import CctvSVG from "../../Icons/CCTV.svg";
import MaintenanceSVG from "../../Icons/Maintenance.svg";
import StormSVG from "../../Icons/Storm.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <motion.div
        className={styles.info}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: 100,
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <h2>A little about us...</h2>
        <p>
          For all your plumbing needs, look no further than Gotya Plumbing. From
          renovating your space to fixing clogged drains and unblocking toilets,
          our team of skilled and seasoned plumbers are equipped to handle it
          all. Our services extend to both residential and commercial
          properties, accommodating both small and large-scale projects. Trust
          us to get the job done right.
        </p>
      </motion.div>

      <div className={styles["flex-blocker"]}>
        <motion.img
          className={styles["about-img"]}
          src={aboutImg}
          alt="about-image"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              y: 40,
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              y: 0,
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default About;
