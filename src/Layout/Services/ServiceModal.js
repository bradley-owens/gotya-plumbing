import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./ServiceModal.module.css";
import BathroomRenovation from "../../Icons/BathroomRenovation.svg";
import CctvSVG from "../../Icons/CCTV.svg";
import MaintenanceSVG from "../../Icons/Maintenance.svg";
import StormSVG from "../../Icons/Storm.svg";

const ServiceModal = (props) => {
  // console.log(props.chosenService);

  const clickedService = props.chosenService;

  const [chosen, setChosen] = useState({
    title: "Maintenance Plumbing",
    icon: MaintenanceSVG,
    description:
      "With no limitations to our service, we will get you up and going in no time. Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
  });

  const changeModal = () => {
    if (clickedService.type === "Maintenance Plumbing") {
      setChosen({
        title: clickedService.type,
        icon: MaintenanceSVG,
        description:
          "With no limitations to our service, we will get you up and going in no time. Get in contact with us to discuss the problem and we'll let you know when we'll be there.",
      });
    } else if (clickedService.type === "Bathroom Renovations") {
      setChosen({
        title: clickedService.type,
        icon: BathroomRenovation,
        description:
          "Does your bathroom need an update? We have all the trades covered, ready for a call to give you your dream bathroom. Get in touch for a quote for you next bathroom renovation.",
      });
    } else if (clickedService.type === "CCTV Drain Camera Inspections") {
      setChosen({
        title: clickedService.type,
        icon: CctvSVG,
        description:
          "With our CCTV Drain Camera inspections, we can show you how blocked your drains are or we can beat it to the punchline and get it sorted with the help of our prior inspections.",
      });
    } else if (clickedService.type === "Sewer and Stormwater Drainage") {
      setChosen({
        title: clickedService.type,
        icon: StormSVG,
        description:
          "Blocked or damaged sewers and storm drains can be a nightmare. Give us a call and let us take care of it for you. We'll give you the solutions to keep the stress off your shoulders and on ours. ",
      });
    }
  };

  useEffect(() => {
    changeModal();
  }, [clickedService]);

  return (
    <div
      className={props.clicked ? styles.animation : styles.displayed}
      id="display"
    >
      <div className={styles.top}>
        <p className={styles.title}>{chosen.title}</p>
        <img className={styles.icon} alt="icon" src={chosen.icon}></img>
      </div>
      <p className={styles.description}>{chosen.description}</p>
      <Button text="Contact" href="#contact"></Button>
    </div>
  );
};

export default ServiceModal;
