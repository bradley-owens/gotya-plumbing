import styles from "./Services.module.css";
import React from "react";
import { ServiceArray } from "./ServicesArray";
import { delay, motion } from "framer-motion";
import mainimg from "../../Images/main.jpg";

const Services = React.memo(() => {
  const title = "See what we can do for".split(" ");
  let delay = 0.1;

  return (
    <main id="services" className={styles.services}>
      <div className={styles.title}>
        {title.map((charatcer, index) => {
          delay = delay + 0.15;
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  color: "white",
                  // scale: 0.8,
                },
                visible: {
                  color: "#ff8e25",
                  // scale: 1,
                  transition: {
                    delay: delay,
                    duration: 1,
                  },
                },
              }}
            >
              {charatcer}
            </motion.div>
          );
        })}
        <span style={{ color: "white" }}>you</span>
      </div>
      {ServiceArray.map((service) => {
        return (
          <motion.div
            key={Math.random()}
            className={styles["service-container"]}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                y: 100,
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <div className={styles["service-header"]}>
              <img src={service.icon} />
              <h2>{service.name}</h2>
              <img src={service.icon} />
            </div>

            <p>{service.description}</p>
          </motion.div>
        );
      })}
    </main>
  );
});

export default Services;
