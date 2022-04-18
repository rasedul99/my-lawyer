import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer container text-center">
      <p>
        <small> All Right Reserved to @MY-LAWYER</small>
      </p>
      <p>
        <small>copyright @ {year} </small>
      </p>
    </footer>
  );
};

export default Footer;
