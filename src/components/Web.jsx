import React from "react";
import { Link } from "react-router-dom";

const Web = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://atztechnology.com/wp-content/uploads/2020/01/web-application-development.png"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">Web and App Development Services</h1>
          <p className="text-center mt-2">
            Elevate your digital presence with our cutting-edge web and app
            development services. Specializing in creating responsive,
            user-friendly, and innovative digital solutions, we help businesses
            thrive in the digital world.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Our Development Expertise</h2>
          <ul>
            <li>
              Custom Website Design: Crafting unique and engaging websites
              tailored to your brand and business goals.
            </li>
            <li>
              Mobile App Development: Building intuitive and high-performing
              mobile applications for iOS and Android platforms.
            </li>
            <li>
              eCommerce Solutions: Developing robust online stores with seamless
              shopping experiences for your customers.
            </li>
            <li>
              User Experience (UX) Design: Focusing on user-centric designs to
              enhance engagement and satisfaction.
            </li>
            <li>
              Web and App Maintenance: Providing ongoing support and updates to
              keep your digital assets at peak performance.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Start Your Project with Us</h2>
          <p>
            Ready to bring your digital ideas to life?{" "}
            <Link to="/register">Register</Link> to discuss your project and
            discover how we can help you succeed in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web;
