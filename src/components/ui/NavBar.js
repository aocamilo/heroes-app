import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Heroes
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ms-auto'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/login'
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
