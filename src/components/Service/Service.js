import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ img, price, title, desc }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    
       <div className="service mt-3">
      <img src={img} alt="" />
      <div className="info px-2 pt-2">
        <h4>{title}</h4>
        <p>{desc}</p>
        <p>Price: {price}</p>
        <Button className="service-btn" onClick={handleCheckout}>CLick here</Button>
      </div>
    </div>
   
  );
};

export default Service;
