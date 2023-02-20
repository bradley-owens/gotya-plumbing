import React from "react";
import styles from "./Information.module.css";
import useDeviceSize from "../../Hooks/useDeviceSize";

const Information = (props) => {
  const [width] = useDeviceSize();
  return (
    <a className={styles.container} href={props.href} target="_blank">
      <img className={styles.icon} src={props.svg}></img>
      {width <= 750 ? null : <p className={styles.info}>{props.info}</p>}
    </a>
  );
};

export default Information;
