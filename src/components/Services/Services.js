import React from "react";
import contract from "../../Images/contract.png";
import family from "../../Images/family.png";
import realstate from "../../Images/real-estate.png";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  return (
    <div id="services" className="d-flex justify-content-between">
      <Service
        title="Buisness And Contracts"
        price="500$"
        img={contract}
        desc="Make professional buisness contracts and more."
      />
      <Service
        title="Real Estate"
        price="500$"
        img={realstate}
        desc="Protect your property with custom legal documents."
      />
      <Service
        title="Family and Personal"
        price="500$"
        img={family}
        desc="Live Confidently."
      />
    </div>
  );
};

export default Services;
