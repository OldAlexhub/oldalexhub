import React from "react";
import { Link } from "react-router-dom";

const Accounting = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://www.nowcfo.com/wp-content/uploads/2022/05/Accounting.png"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">Accounting Services</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <p>
            Our Accounting services offer comprehensive solutions for businesses
            of all sizes. We focus on delivering precise and efficient financial
            management, from bookkeeping to strategic financial planning.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Our Expertise</h2>
          <ul>
            <li>
              Bookkeeping: Detailed and accurate record-keeping for all
              financial transactions.
            </li>
            <li>
              Tax Preparation: Expert assistance with tax filings, ensuring
              compliance and optimization.
            </li>
            <li>
              Financial Reporting: Regular and insightful financial reports for
              informed decision-making.
            </li>
            <li>
              Budgeting and Forecasting: Strategic planning for financial growth
              and stability.
            </li>
            <li>
              Audit and Compliance: Ensuring financial practices meet regulatory
              standards and requirements.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Get in Touch</h2>
          <p>
            Need expert accounting services?{" "}
            <Link to="/register">Register</Link> for tailored solutions that fit
            your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
