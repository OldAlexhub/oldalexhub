import React from "react";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://www.aihr.com/wp-content/uploads/Learning-and-development-manager.png"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">Professional Training Services</h1>
          <p className="text-center mt-2">
            Elevate your team's skills with our comprehensive training programs.
            We offer a range of professional training services designed to
            enhance capabilities, boost performance, and foster career growth.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Our Training Offerings</h2>
          <ul>
            <li>
              Leadership Development: Empower your leaders with advanced
              management skills and strategic thinking.
            </li>
            <li>
              Technical Skills Training: Stay ahead in the tech-driven world
              with our cutting-edge technical courses.
            </li>
            <li>
              Soft Skills Enhancement: Improve communication, teamwork, and
              problem-solving abilities across your organization.
            </li>
            <li>
              Customized Training Solutions: Tailored programs to meet your
              specific organizational needs and objectives.
            </li>
            <li>
              Online Learning Platforms: Accessible and flexible online courses
              for continuous learning and development.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Contact Us for Training</h2>
          <p>
            Ready to transform your workforce?{" "}
            <Link to="/register">Register</Link> to learn more about our
            training services and how we can help you achieve your
            organizational goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
