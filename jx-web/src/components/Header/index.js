import React from "react";

export default function() {
  return (
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="push-menu"
            data-widget="pushmenu"
            href="#/"
          >
            <i className="fa fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">
            主页
          </a>
        </li>
      </ul>
    </nav>
  );
}
