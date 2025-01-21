import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to the Product Management App</h1>
      <h2>
        <Link to="/products">Click here to see all the products</Link>
      </h2>
    </div>
  );
};

export default MainPage;
