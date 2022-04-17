import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h4>You earned it. Protect it or risk losing it.</h4>
      </div>

      <Banner />
      <h3  className="text-center mt-5 mb-3">
        Services
      </h3>
      <Services />
    </div>
  );
};

export default Home;
