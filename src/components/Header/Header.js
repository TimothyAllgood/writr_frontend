import React from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
require('./Header.scss');

function Header({ isLoggedIn, logout, user }) {
  return (
    <header>
      {/* TODO : IMPLEMENT MOBILE/DESKTOP NAVS */}
      <nav>
        <div className="logo">
          <NavLink to="/">
            {/* TODO : FIND WAY TO IMPLEMENT SVG */}
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
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <>
              <li>
                <NavLink to={`/profile/${user}`} className="btn">
                  {user}
                </NavLink>
              </li>
              <li>
                <p className="btn" onClick={logout}>
                  Logout
                </p>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
