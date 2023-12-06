import React from "react";
import { Link } from "react-router-dom";

const Bundle = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4">All-in-One Service Bundles</h1>
          <p className="text-center mt-2">
            Our All-in-One Bundles combine essential services across various
            domains to provide comprehensive solutions for your business. From
            digital transformation to marketing excellence, leverage a complete
            package tailored to your unique needs.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>What's Included</h2>
          <ul>
            <li>
              Web and App Development: End-to-end solutions for creating
              impactful digital platforms.
            </li>
            <li>
              Marketing and Branding: Strategies and campaigns to enhance your
              market presence and brand value.
            </li>
            <li>
              Data Analytics: Insights and analytics to drive data-informed
              decision making.
            </li>
            <li>
              Operational Efficiency: Tools and techniques to streamline your
              business processes for maximum efficiency.
            </li>
            <li>
              Customer Engagement: Solutions to foster strong customer
              relationships and loyalty.
            </li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Customize Your Bundle</h2>
          <p>
            Interested in a tailored solution?{" "}
            <Link to="/register">Register</Link> to discuss how our bundled
            services can be aligned with your business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
