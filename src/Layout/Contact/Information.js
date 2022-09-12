import React from "react";
import styles from "./Information.module.css";

const Information = (props) => {
  return (
    <li className={styles.container}>
      <img className={styles.icon} src={props.svg}></img>
      <p className={styles.info}>{props.info}</p>
    </li>
  );
};

export default Information;
