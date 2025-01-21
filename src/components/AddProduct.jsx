import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Product.css'

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://678a8ededd587da7ac2aa691.mockapi.io/Products', {
        name,
        description,
        price,
      }).then(() => navigate('/'));
    };
  
  return (
    <>
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
    </>

  )
    }
