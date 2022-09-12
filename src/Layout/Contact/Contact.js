import React from "react";
import styles from "./Contact.module.css";
import Information from "./Information";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch!</h1>
      <h2 className={styles.areas}>Sunshine Coast - Brisbane - Esky</h2>
      <div className={styles["flex-container"]}>
        <div className={styles.information}>
          <Information />
          <Information />
          <Information />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
