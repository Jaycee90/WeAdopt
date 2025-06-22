import React from 'react';
import { Link } from 'react-router-dom';
import '/src/css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/adopt" className="nav-link">Adopt</Link>
        <Link to="/donate" className="nav-link">Donate</Link>
    </nav>
  );
}

export default Navbar;
