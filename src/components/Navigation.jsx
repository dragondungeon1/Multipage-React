import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li
              class={`nav-item  ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/About" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/About">
                About
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li
              class={`nav-item  ${
                props.location.pathname === "/Contact" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/Contact">
                Contact
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
