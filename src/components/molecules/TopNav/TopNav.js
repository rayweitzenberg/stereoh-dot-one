// Soundtrack for TopNav:
// https://www.nts.live/shows/boom-bip/episodes/boom-bip-18th-may-2020

import React from "react";

import "./TopNav.scss"

const MenuItem = (href) => {
  // let { label, src, href, description } = props;
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <h2>neonPlatform</h2>
        <ul>
          <li className="menu-item">
            <a href={href}>
              <h4>menu01</h4>
            </a>
          </li>
          <li className="menu-item">
            <a href={href}>
              <h4>menu02</h4>
            </a>
          </li>
          <li className="menu-item">
            <a href={href}>
              <h4>menu03</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className="top-nav-right">
        <a href={href}>
          <h4>login</h4>
        </a>
        <a href={href}>
          <button>sign up</button>
        </a>
      </div>
    </nav>
  );
};

export default MenuItem;