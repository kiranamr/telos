import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../images/telos-logo.PNG")}
            height="33"
            width="120"
          />
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
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
      </nav>
    );
  }
}
