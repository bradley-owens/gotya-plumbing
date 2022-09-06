import styles from "./ServiceChoice.module.css";

const ServiceChoice = (props) => {
  return (
    <div
      className={styles.container}
      onClick={props.onClick}
      id={props.type}
      svg={props.svg}
    >
      <img className={styles.icon} src={props.svg}></img>
      <p className={styles["service-type"]}>{props.type}</p>
    </div>
  );
};

export default ServiceChoice;
