import React from "react";
import styles from "./Contact.module.css";
import Information from "./Information";
import Map from "./Map";
import phone from "../../Icons/PhoneIcon.svg";
import email from "../../Icons/Email.svg";
import instagram from "../../Icons/Instagram.svg";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact Our Plumbing Experts</h1>
      <h2 className={styles.subtitle}>Sunshine Coast - Brisbane - Esk</h2>
      <div className={styles["flex-container"]}>
        <div className={styles.information}>
          <Information svg={phone} info="0424807653" href="tel:+61428845477" />
          <Information
            svg={email}
            info="bradowens17@hotmail.com"
            href={"mailto:bradowens17@hotmail.com"}
          />
          <Information
            svg={instagram}
            info="gotya.plumbing.solutions"
            href="https://www.instagram.com/gotya.plumbing.solutions/"
          />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
