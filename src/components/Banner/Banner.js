import React from "react";
import { Carousel } from "react-bootstrap";
import cover from "../../Images/Banner/first.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={cover}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Protect Your Assets</h3>
            <p>I will help you to protect your asstes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
