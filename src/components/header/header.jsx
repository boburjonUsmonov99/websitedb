import React from 'react';
import './header.css'; // This will be your CSS file for the Header
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <div className="brand">
        
        <RouterLink to="/"><p className='brand-text '>UzAutoMovers</p></RouterLink>
        </div>
      <nav>
        <Link to="about" smooth={true} duration={600}>About Us</Link>
        <Link to="founders" smooth={true} duration={900}>Founders</Link>
        <RouterLink to="signin">Sign In</RouterLink>
        <RouterLink to="signup">Sign Up</RouterLink>
        <RouterLink to="trucker">drivers</RouterLink>
        <RouterLink to="client">clients</RouterLink>
      </nav>
    </header>
  );
}; 

export default Header;