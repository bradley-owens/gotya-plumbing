import React, { useState, useEffect, useCallback } from "react";

import styles from "./App.module.css";
import Hero from "./Layout/Hero/Hero";
import Contact from "./Layout/Contact/Contact";
import Footer from "./Layout/Footer/Footer";
import Navigation from "./UI/Navigation/Navigation";
import About from "./Layout/About/About";
import Services from "./Layout/Services/Services";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const test = useCallback((e) => {
    setScrollY(e.target.scrollTop);
  }, []);

  return (
    <div className={styles.container} onScroll={test}>
      <Hero className={styles.section} />
      <About className={styles.section} />
      <Services className={styles.section} />
      <Contact className={styles.section} />
    </div>
  );
}

export default App;
