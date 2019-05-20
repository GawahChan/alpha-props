import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <div className="navigation">
      <div className="navigation-title">
        <h1>Alpha-props</h1>
      </div>
      <nav to="/" className="navigation_items">
        <Link to="/">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Search">Search </Link>
        <Link to="/Login">Login </Link>
      </nav>
      <div className="navigation-inputbox">
        <input
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
export default NavBar;
