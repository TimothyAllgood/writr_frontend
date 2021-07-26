import React from 'react';
import { NavLink, Link } from 'react-router-dom';

require('./Header.scss');

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
