import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Nairobi</Link>
          </li>
          <li className="navigation-item">
            <Link to="/Malindi">Malindi</Link>
          </li>
          <li className="navigation-item">
            <Link to="/sydney">Sydney</Link>
          </li>
          <li className="navigation-item">
            <Link to="/san-francisco">San Francisco</Link>
          </li>
        </ul>
      </header>
    );
  }
}