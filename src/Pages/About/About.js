import React from "react";
import me from "../../Images/social/me.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container">
     
        <div className="text-center mt-5">
          <img
            className="rounded-circle"
            style={{ width: "200px" }}
            src={me}
            alt="rsedul Islam"
          />

          <p>Hi My name is rasedul Islam</p>
        
      </div>
    </div>
  );
};

export default About;
