import React, { useState } from "react";
import styles from "./Services.module.css";
import ServiceChoice from "../../UI/Navigation/Service/ServiceChoice";
import ServiceModal from "./ServiceModal";
import BathroomSVG from "../../Icons/BathroomRenovation.svg";
import CctvSVG from "../../Icons/CCTV.svg";
import MaintenanceSVG from "../../Icons/Maintenance.svg";
import StormSVG from "../../Icons/Storm.svg";

const Services = () => {
  const [clickedService, setClickedService] = useState({
    type: "Maintenance Plumbing",
    svg: { MaintenanceSVG },
  });

  const clickServiceHandler = (e) => {
    setClickedService({
      type: e.target.id,
      svg: e.target.svg,
    });
  };

  return (
    <div className={styles.services}>
      <div className={styles["flex-services"]}>
        <ServiceChoice
          onClick={clickServiceHandler}
          svg={MaintenanceSVG}
          type="Maintenance Plumbing"
        />

        <ServiceChoice
          onClick={clickServiceHandler}
          svg={BathroomSVG}
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
        <ServiceModal chosenService={clickedService} />
      </div>
    </div>
  );
};

export default Services;
