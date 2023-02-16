import styles from "./Services.module.css";
import { ServiceArray } from "./ServicesArray";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <main id="services" className={styles.services}>
      <h1>
        See what we can do for <span style={{ color: "white" }}>you</span>
      </h1>
      {ServiceArray.map((service) => {
        return (
          <motion.div
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
};

export default Services;
