import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand logo" href="#">YOUTUFLIX</a>
      <ul className="nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      </ul>       
    </div>
  );
};

export default Navbar;