import React from "react";
import Image from "../images/finance.png";
import Manager from "../images/manager.png";
import HR from "../images/resources.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Body.css";

const Body = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Services</h2>

      <div className="row mb-4">
        <div className="col-md-6 order-md-2">
          <img src={Image} alt="Accounting" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
          <h3>Accounting</h3>
          <ul>
            <li>
              Exploring the market to bring you the best financial solutions.
            </li>
            <li>
              Delivering industry-specific, high-productivity products tailored
              for your company.
            </li>
            <li>
              Implementing and optimizing Accounting software from spreadsheets
              to QuickBooks.
            </li>
            <li>
              Developing customized accounting software at competitive prices.
            </li>
          </ul>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <img src={Manager} alt="Management" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3>Management</h3>
          <ul>
            <li>
              Designing an effective organizational structure for optimal
              productivity.
            </li>
            <li>
              Ensuring efficient management processes without hindering
              productivity.
            </li>
            <li>Assessing manpower needs to ensure smooth operations.</li>
            <li>Guaranteeing satisfaction from management to employees.</li>
          </ul>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 order-md-2">
          <img src={HR} alt="Human Resources" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
          <h3>Human Resources</h3>
          <ul>
            <li>
              Attracting top talent through strategic analysis and planning.
            </li>
            <li>Ensuring competitive, balanced compensation structures.</li>
            <li>
              Leveraging the latest technologies for efficient job postings.
            </li>
            <li>
              Offering custom webapp development for comprehensive employee
              management.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2>Explore Our Full Range of Services</h2>
        <p>
          <Link to="/services" className="text-decoration-none">
            View All Services
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Body;
