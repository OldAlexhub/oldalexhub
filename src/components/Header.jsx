import React from "react";
import City from "../images/city.jpg";
import "../styles/Header.css"; // Make sure you have this CSS file

const Header = () => {
  return (
    <div className="header-container">
      <img src={City} alt="Aerial view of the city" className="header-image" />
    </div>
  );
};

export default Header;
