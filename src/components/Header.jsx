import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/products">Product List</Link></li>
          <li><Link to="/edit/:id">Edit</Link></li>
          <li><Link to="/Signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>

           </ul>
      </nav>
    </header>
  );
};

export default Header;
