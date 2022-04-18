import React from "react";
import me from "../../Images/social/me.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img
          className="rounded-circle mb-2"
          style={{ width: "200px" }}
          src={me}
          alt="rsedul Islam"
        />

        <p>
          Hi My name is rasedul Islam.I am last year student of Daffodil
          international university.I am doing very hard work Almost 10 hours a
          day to achive a good job in reputed company as a full stack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
