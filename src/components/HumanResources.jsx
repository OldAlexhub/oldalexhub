import React from "react";
import { Link } from "react-router-dom";

const HumanResources = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://www.talentproindia.com/wp-content/uploads/2023/05/Understanding-the-Basics-of-Human-Resource-Management-How-to-Choose-the-Right-HR-Management-Services-for-Your-Business-1.png"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">Human Resources Solutions</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Our Human Resources services are tailored to meet the needs of
            organizations seeking to optimize their HR operations. Whether
            you're a small startup or a large corporation, our expertise can
            guide you through the complexities of managing people effectively.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Our Services</h2>
          <ul>
            <li>
              Talent Acquisition: Streamlining recruitment processes to attract
              top talent.
            </li>
            <li>
              Employee Development: Implementing training and development
              programs to enhance skills and career growth.
            </li>
            <li>
              Performance Management: Creating effective strategies for
              evaluating and improving employee performance.
            </li>
            <li>
              Workplace Culture: Fostering a positive and inclusive workplace
              environment.
            </li>
            <li>
              Compliance and Legal: Ensuring adherence to employment laws and
              regulations.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Contact Us</h2>
          <p>
            Interested in improving your HR operations?{" "}
            <Link to="/register">Register</Link> today to learn more about how
            we can help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HumanResources;
