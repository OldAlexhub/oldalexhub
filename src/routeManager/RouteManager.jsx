import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "../components/Layout";
import Contact from "../routes/Contact";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Services from "../routes/Services";
import Management from "../components/Management";
import HumanResources from "../components/HumanResources";
import Accounting from "../components/Accounting";
import Data from "../components/Data";
import Training from "../components/Training";
import Compliance from "../components/Compliance";
import Web from "../components/Web";
import StartUp from "../components/StartUp";
import Bundle from "../components/Bundle";
import OpenTicket from "../routes/OpenTicket";
import MyTickets from "../routes/MyTickets";
import Admin from "../routes/Admin";

const RouteManager = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token; // Simplified check for token presence
  };

  const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (!isLoggedIn()) {
        navigate("/login", { state: { from: location }, replace: true });
      }
    }, [location, navigate]);

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="services" element={<Services />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="management" element={<Management />} />
          <Route path="humanresources" element={<HumanResources />} />
          <Route path="accounting" element={<Accounting />} />
          <Route path="training" element={<Training />} />
          <Route path="data-analysis" element={<Data />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="web-developing" element={<Web />} />
          <Route path="startup" element={<StartUp />} />
          <Route path="bundle" element={<Bundle />} />
          <Route
            path="openticket"
            element={
              <ProtectedRoute>
                <OpenTicket />
              </ProtectedRoute>
            }
          />
          <Route
            path="mytickets"
            element={
              <ProtectedRoute>
                <MyTickets />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
