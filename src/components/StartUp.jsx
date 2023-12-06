import React from "react";
import { Link } from "react-router-dom";

const StartUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://keysearch.com/wp-content/uploads/2022/07/Blog-Post-Scale-Your-Startup-2_Scale-your-Startup-Culture-in-Times-of-Rapid-Growth-infrographic.jpg"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">
            Startup Growth and Support Services
          </h1>
          <p className="text-center mt-2">
            Launch and grow your startup with our specialized services designed
            for emerging businesses. We provide the tools, resources, and
            expertise to help startups navigate the early stages of business
            development successfully.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Our Services for Startups</h2>
          <ul>
            <li>
              Business Planning and Strategy: Structured guidance to develop
              your business plan and growth strategy.
            </li>
            <li>
              Market Research: In-depth analysis to understand your market and
              position your startup effectively.
            </li>
            <li>
              Funding Assistance: Support in identifying and securing funding
              opportunities.
            </li>
            <li>
              Branding and Marketing: Creating impactful branding and marketing
              strategies to build your presence.
            </li>
            <li>
              Technology Solutions: Implementing the right technology stack to
              scale your startup efficiently.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Begin Your Startup Journey</h2>
          <p>
            Ready to take the first step? <Link to="/register">Register</Link>{" "}
            to explore how we can support your startup's growth and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
