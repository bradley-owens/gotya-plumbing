import React, { useState } from "react";
import styles from "./Services.module.css";
import ServiceChoice from "../../UI/Service/ServiceChoice";
import ServiceModal from "./ServiceModal";
import BathroomRenovation from "../../Icons/BathroomRenovation.svg";
import CctvSVG from "../../Icons/CCTV.svg";
import MaintenanceSVG from "../../Icons/Maintenance.svg";
import StormSVG from "../../Icons/Storm.svg";

const Services = () => {
  const [click, setClick] = useState();

  const [clickedService, setClickedService] = useState({
    type: "Maintenance Plumbing",
  });

  const clickServiceHandler = (e) => {
    setClickedService({
      type: e.target.id,
    });

    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 1000);
  };

  return (
    <div className={styles.container} id="services">
      <h1 className={styles.title}>Quick, easy, simple...</h1>
      <ul className={styles.services}>
        <div className={styles["flex-services"]}>
          <ServiceChoice
            onClick={clickServiceHandler}
            svg={MaintenanceSVG}
            type="Maintenance Plumbing"
          />

          <ServiceChoice
            onClick={clickServiceHandler}
            svg={BathroomRenovation}
            type="Bathroom Renovations"
          />
          <ServiceChoice
            onClick={clickServiceHandler}
            svg={CctvSVG}
            type="CCTV Drain Camera Inspections"
          />
          <ServiceChoice
            onClick={clickServiceHandler}
            svg={StormSVG}
            type="Sewer and Stormwater Drainage"
          />
        </div>
        <div className={styles.main}>
          <ServiceModal clicked={click} chosenService={clickedService} />
        </div>
      </ul>
    </div>
  );
};

export default Services;
