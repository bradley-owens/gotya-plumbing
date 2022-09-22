import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <a className={styles.button} href="#contact">
      {props.text}
    </a>
  );
};

export default Button;
