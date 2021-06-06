import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
              {/* It is used to style the active routes so that user knows on which page he or she is currently browsing on the website. */}
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New Tweet
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
