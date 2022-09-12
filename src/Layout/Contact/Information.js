import React from "react";
import styles from "./Information.module.css";

const Information = (props) => {
  return (
    <div className={styles.container}>
      <icon></icon>
      <h2>{props.info}</h2>
    </div>
  );
};

export default Information;
