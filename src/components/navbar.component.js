import React, { Component } from "react";
import { Link } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-dark">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../images/telos-logo.PNG")}
            height="33"
            width="120"
          />
        </Link>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/queries" className="nav-link">
                Queries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
            {/*   <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
         */}
            {/*   <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      /*     <nav className="navbar navbar-dark bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../images/telos-logo.PNG")}
            height="33"
            width="120"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collpase navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/queries" className="nav-link">
                Queries
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */
    );
  }
}
