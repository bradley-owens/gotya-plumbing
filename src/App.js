import React, { Fragment } from "react";
import styles from "./App.module.css";
import Hero from "./Layout/Hero/Hero";
import Contact from "./Layout/Contact/Contact";
import Footer from "./Layout/Footer/Footer";
import Navigation from "./UI/Navigation/Navigation";
import About from "./Layout/About/About";
import Services from "./Layout/Services/Services";

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Hero className={styles.section} />
      <About className={styles.section} />
      <Services className={styles.section} />
      {/* <Contact className={styles.section} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
