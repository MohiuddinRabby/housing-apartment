import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/img/header-logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-custom-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={headerLogo} alt="housing-aprtment-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/buy-property">
                Buy Property
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rent-land">
                Rent Land
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
