import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("role");

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    localStorage.removeItem("company");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Old Alex Hub
          </Link>
          <div>
            {userName && (
              <span className="navbar-text me-auto">Welcome {userName}</span>
            )}
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              {userName && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/openticket">
                      Open A Ticket
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mytickets">
                      My Tickets
                    </Link>
                  </li>
                  {userRole === "admin" && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin Access
                      </Link>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}

              {!userName && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
