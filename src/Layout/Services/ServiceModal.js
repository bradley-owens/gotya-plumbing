import React, { useEffect, useState } from "react";
import styles from "./ServiceModal.module.css";
import BathroomRenovation from "../../Icons/BathroomRenovation.svg";
import CctvSVG from "../../Icons/CCTV.svg";
import MaintenanceSVG from "../../Icons/Maintenance.svg";
import StormSVG from "../../Icons/Storm.svg";

const ServiceModal = (props) => {
  console.log(props.chosenService);

  const [chosen, setChosen] = useState({
    title: "Maintenance Plumbing",
    icon: MaintenanceSVG,
    description:
      "With no limitations to our service we will get you up and going in no time.Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
  });

  const changeModal = () => {
    if (props.chosenService.type === "Maintenance Plumbing") {
      setChosen({
        title: "Maintenance Plumbing",
        icon: MaintenanceSVG,
        description:
          "With no limitations to our service we will get you up and going in no time.Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
      });
    } else if (props.chosenService.type === "Bathroom Renovations") {
      setChosen({
        title: "Bathroom Renovation",
        icon: BathroomRenovation,
        description:
          "With no limitations to our service we will get you up and going in no time.Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
      });
    } else if (props.chosenService.type === "CCTV Drain Camera Inspections") {
      setChosen({
        title: "CCTV Drain Camera Inspections",
        icon: CctvSVG,
        description:
          "With no limitations to our service we will get you up and going in no time.Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
      });
    } else if (props.chosenService.type === "Sewer and Stormwater Drainage") {
      setChosen({
        title: "Sewer & Stormwater Drainage",
        icon: StormSVG,
        description:
          "With no limitations to our service we will get you up and going in no time.Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
      });
    }
  };

  useEffect(() => {
    changeModal();
  }, [props.chosenService]);

  return (
    <div className={styles.displayed}>
      <div className={styles.top}>
        <p className={styles.title}>{chosen.title}</p>
        <img className={styles.icon} src={chosen.icon}></img>
      </div>
      <p className={styles.description}>{chosen.description}</p>
      <p></p>
    </div>
  );
};

export default ServiceModal;
