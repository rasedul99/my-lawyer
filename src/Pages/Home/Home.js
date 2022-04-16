import React from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
