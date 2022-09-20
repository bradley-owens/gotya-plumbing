import React, { Fragment } from "react";
import styles from "./App.module.css";
import Hero from "./Layout/Hero/Hero";
import Services from "./Layout/Services/Services";
import Reviews from "./Layout/Reviews/Reviews";
import Contact from "./Layout/Contact/Contact";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Hero className={styles.section} />
      <Services className={styles.section} />
      <Reviews className={styles.section} />
      <Contact className={styles.section} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
