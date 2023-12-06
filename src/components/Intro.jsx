import React from "react";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "250px", width: "400px" }}
          className="mb-3"
        />

        <h1 className="mb-3">Old Alex Hub</h1>
        <p className="lead">Driving Business Innovation Forward</p>
      </div>
      <div className="my-4">
        <p>
          At <strong>Old Alex Hub</strong>, we specialize in nurturing every
          aspect of startups and established companies. Explore our{" "}
          <Link to="/services" className="text-decoration-none">
            <strong>services</strong>
          </Link>{" "}
          to discover how we can propel your business to new heights. Our team
          is dedicated to meticulously researching each project to devise
          tailored solutions.
        </p>
        <p>
          Leveraging the latest industry innovations,{" "}
          <strong>Old Alex Hub</strong> ensures your business is equipped with
          cutting-edge solutions tailored to your unique needs.
        </p>
        <p>
          With our expertise, we guide your company through a seamless startup
          process, ensuring each step is strategically planned for stable
          operations. We also assess market demand to establish the necessary
          departments within your startup effectively.
        </p>
      </div>
      <div>
        <p>
          For established companies seeking transformation or operational
          reinvention, <strong>Old Alex Hub</strong> offers comprehensive
          business analysis and research-based reform strategies. We're
          committed to facilitating a successful reformation that aligns with
          your business goals and market dynamics.
        </p>
      </div>
    </div>
  );
};

export default Intro;
