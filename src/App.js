import React, { Fragment } from "react";
import Hero from "./Layout/Hero/Hero";
import styles from "./App.module.css";
import Services from "./Layout/Services/Services";

function App() {
  return (
    <div className={styles.container}>
      <Hero className={styles.section} />
      <Services className={styles.section} />
    </div>
  );
}

export default App;
