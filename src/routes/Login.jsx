import React, { useState } from "react";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, formData);
      const { token, userId, name, companyName, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("name", name);
      localStorage.setItem("company", companyName);
      localStorage.setItem("role", role);
      navigate("/");
    } catch (error) {
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
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>

            <p className="text-center">
              To register, please click{" "}
              <Link to="/register" className="link-primary">
                here!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
