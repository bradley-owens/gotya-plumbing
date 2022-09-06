import React from "react";
import styles from "./ServiceModal.module.css";

const ServiceModal = (props) => {
  console.log(props.chosenService);
  return (
    <div className={styles.displayed}>
      <div>
        <h1></h1>
        <img></img>
      </div>
      <p></p>
      <p></p>
    </div>
  );
};

export default ServiceModal;
