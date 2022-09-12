import React from "react";
import styles from "./Contact.module.css";
import Information from "./Information";
import Map from "./Map";
import Icon1 from "../../Icons/Storm.svg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch!</h1>
      <h2 className={styles.areas}>Sunshine Coast - Brisbane - Esky</h2>
      <div className={styles["flex-container"]}>
        <div className={styles.information}>
          <Information className={styles.flex} svg={Icon1} info="0428835477" />
          <Information svg={Icon1} info="bradowens17@hotmail.com" />
          <Information svg={Icon1} info="bradleyowens__" />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
