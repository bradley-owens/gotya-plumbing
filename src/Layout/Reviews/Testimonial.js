import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.review}>{props.review}</p>
    </div>
  );
};

export default Testimonial;
