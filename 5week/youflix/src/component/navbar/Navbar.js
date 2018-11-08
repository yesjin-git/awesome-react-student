import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark-trans ">
		  <a className="navbar-brand logo" href="#">YOUFLIX</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <NavLink className="nav-link" to="/">Home</NavLink>
		      </li>
		      <li className="nav-item">
		      	<NavLink className="nav-link" to="/search">Search</NavLink>
		      </li>
		    </ul>
		  </div>
		</nav>
      </div>
    );
  }
}

export default Navbar;
