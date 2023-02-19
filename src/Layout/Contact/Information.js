import React from "react";
import styles from "./Information.module.css";

const Information = (props) => {
  return (
    <a className={styles.container} href={props.href} target="_blank">
      <img className={styles.icon} src={props.svg}></img>
      <p className={styles.info}>{props.info}</p>
    </a>
  );
};

export default Information;
