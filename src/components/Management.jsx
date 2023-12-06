import React from "react";
import { Link } from "react-router-dom";

const Management = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img
            src="https://www.lystloc.com/blog/wp-content/uploads/2022/12/ezgif.com-gif-maker-80.webp"
            alt="manager"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="text-center">Management Solutions</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Catering to mid-level and senior managers, as well as board members,
            our services are designed for decision-makers like you.
          </p>
          <p>
            Decision-making is a science, and we at Old Alex Hub have the
            expertise to enhance your skills, enabling more effective and
            efficient decisions.
          </p>
          <p>
            Our approach involves refining decision-making processes to boost
            your organization's productivity and effectiveness.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              Comprehensive data analysis for informed decisions and clearer
              vision.
            </li>
            <li>Operational research for smoother, hiccup-free processes.</li>
            <li>
              Integration of the latest technologies to streamline tasks and
              focus on priorities.
            </li>
            <li>
              Assessing and optimizing the work environment to align with your
              organizational goals.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Package Details</h2>
          <ul>
            <li>
              Register to open a ticket with us!{" "}
              <Link to="/register">Register Here!</Link>
            </li>
            <li>
              Personalized need assessment followed by a detailed action plan.
            </li>
            <li>Provision of a tailored proposal for your approval.</li>
            <li>Progression to implementation upon proposal acceptance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Management;
