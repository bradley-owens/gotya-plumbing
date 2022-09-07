import styles from "./ServiceChoice.module.css";

const ServiceChoice = (props) => {
  return (
    <div>
      <li className={styles.container} onClick={props.onClick} id={props.type}>
        <img className={styles.icon} id={props.type} src={props.svg}></img>
        <p className={styles["service-type"]} id={props.type}>
          {props.type}
        </p>
      </li>
    </div>
  );
};

export default ServiceChoice;
