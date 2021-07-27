import React from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
require('./Header.scss');

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <ReactSVG
              beforeInjection={(svg) => {
                svg.classList.add('logo-svg');
                svg.setAttribute('style', 'width: 200px');
              }}
              src="logo.svg"
            />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/login" className="btn">
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="btn">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
