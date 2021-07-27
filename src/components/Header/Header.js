import React from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
require('./Header.scss');

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add('svg-class-name');
              svg.setAttribute('style', 'width: 200px');
            }}
            src="logo.svg"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
