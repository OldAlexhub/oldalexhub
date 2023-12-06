import React, { useState } from "react";
import Logo from "../images/logo.jpg";
import axios from "axios";

const OpenTicket = () => {
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    userId: userId,
    product: "",
    message: "",
    companyName: "",
    phoneNumber: "",
    email: "",

    perferedContact: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        process.env.REACT_APP_OPEN_TICKET,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <img
            src={Logo}
            alt="logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "250px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="packageRequest" className="form-label">
            Package Request
          </label>
          <select
            className="form-select"
            id="packageRequest"
            name="product"
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">Select One</option>
            <option value="management">Management</option>
            <option value="hr">Human Resources</option>
            <option value="accounting">Accounting</option>
            <option value="data">Data Analysis</option>
            <option value="training">Training & Development</option>
            <option value="compliance">Compliance</option>
            <option value="web">Web & App Development</option>
            <option value="startup">Start Up</option>
            <option value="bundle">Bundle</option>
            <option value="others">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contactMethod" className="form-label">
            Preferred method to be contacted
          </label>
          <select
            className="form-select"
            id="contactMethod"
            name="perferedContact"
            value={formData.perferedContact}
            onChange={handleChange}
          >
            <option value="">Select One</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request for Proposal
        </button>
      </form>
    </div>
  );
};

export default OpenTicket;
