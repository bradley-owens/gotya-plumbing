import React, { Fragment } from "react";
import Hero from "./Layout/Hero/Hero";
import styles from "./App.module.css";
import Services from "./Layout/Services/Services";

function App() {
  return (
    <Fragment>
      <Hero />
      <Services />
    </Fragment>
  );
}

export default App;
