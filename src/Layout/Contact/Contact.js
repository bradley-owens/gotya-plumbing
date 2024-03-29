import React from "react";
import styles from "./Contact.module.css";
import Information from "./Information";
import Map from "./Map";
import phone from "../../Icons/PhoneIcon.svg";
import email from "../../Icons/Email.svg";
import instagram from "../../Icons/Instagram.svg";
import { motion } from "framer-motion";
import { AnimationStyle } from "../../Hooks/AnimationStyle";

const Contact = () => {
  const contactLinks = [
    { icon: phone, name: "0424807653", href: "tel:+61424807653", delay: 0.2 },
    {
      icon: email,
      name: "gotyaplumbingsolutions@gmail.com",
      href: "mailto:gotyaplumbingsolutions@gmail.com",
      delay: 0.4,
    },
    {
      icon: instagram,
      name: "gotya.plumbing.solutions",
      href: "https://www.instagram.com/gotya.plumbing.solutions/",
      delay: 0.6,
    },
  ];
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact Our Plumbing Experts</h1>
      <h2 className={styles.subtitle}>Sunshine Coast - North Brisbane</h2>
      <div className={styles["flex-container"]}>
        <div className={styles.information}>
          {contactLinks.map(({ icon, name, href, delay }) => {
            return (
              <motion.div
                className={styles.link}
                initial="hidden"
                whileInView="visible"
                variants={AnimationStyle(delay)}
              >
                <Information svg={icon} info={name} href={href} />
              </motion.div>
            );
          })}
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
