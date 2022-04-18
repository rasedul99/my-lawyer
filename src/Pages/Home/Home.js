import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="container ">
      <Banner />
      <h3  className="text-center mt-5 mb-3">
        Services
      </h3>
      <Services />
    </div>
  );
};

export default Home;
