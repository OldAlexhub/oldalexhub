import React, { useState } from "react";
import Logo from "../images/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState({
    success: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    companyName: "",
    title: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_SIGNUP, formData);
      if (response.status === 201) {
        setRegistrationStatus({
          success: true,
          message: "User created successfully!",
        });
      }
      navigate("/login");
    } catch (error) {
      setRegistrationStatus({ success: false, message: "Failed to register" });
      console.log(error);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50">
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src={Logo}
              alt="logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <h2>Register</h2>
          </div>
          {registrationStatus.message && (
            <div
              className={`alert ${
                registrationStatus.success ? "alert-success" : "alert-danger"
              }`}
            >
              {registrationStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
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
              <label htmlFor="lname" className="form-label">
                Your Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
