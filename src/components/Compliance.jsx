import React from "react";
import { Link } from "react-router-dom";

const Compliance = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://static.colligo.com/wp-content/uploads/2022/06/Blog-Post_LinkedIn-Ads-March-2023-1200x628-1.png"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">
            Compliance and Regulatory Services
          </h1>
          <p className="text-center mt-2">
            Navigate the complexities of regulatory compliance with our expert
            services. We specialize in helping businesses adhere to industry
            standards, legal requirements, and ethical practices, ensuring a
            seamless compliance journey.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Our Compliance Solutions</h2>
          <ul>
            <li>
              Risk Assessment: Identifying and mitigating compliance risks in
              your business operations.
            </li>
            <li>
              Policy Development: Crafting comprehensive compliance policies
              tailored to your specific industry needs.
            </li>
            <li>
              Training Programs: Educating your staff on compliance standards to
              foster a culture of adherence and accountability.
            </li>
            <li>
              Audit and Reporting: Conducting thorough compliance audits and
              providing detailed reporting for transparency and improvement.
            </li>
            <li>
              Regulatory Updates: Keeping your business informed and up-to-date
              with the latest regulatory changes and requirements.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Get in Touch</h2>
          <p>
            Ensure your business is compliant and future-proof.{" "}
            <Link to="/register">Register</Link> for a consultation and learn
            more about our comprehensive compliance services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
