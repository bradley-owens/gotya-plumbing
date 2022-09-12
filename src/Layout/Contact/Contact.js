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
      <h1 className={styles.title}>Get in touch!</h1>
      <h2 className={styles.areas}>Sunshine Coast - Brisbane - Esk</h2>
      <div className={styles["flex-container"]}>
        <div className={styles.information}>
          <Information svg={phone} info="0428835477" />
          <Information svg={email} info="bradowens17@hotmail.com" />
          <Information svg={instagram} info="bradleyowens__" />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
