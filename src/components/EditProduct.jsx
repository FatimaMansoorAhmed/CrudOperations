import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'

export const EditProduct = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); 


  useEffect(() => {
    axios.get(`https://678a8ededd587da7ac2aa691.mockapi.io/Products/${id}`)
      .then((response) => {
        const product = response.data;
        setName(product.Name); 
        setDescription(product.Description);
        setPrice(product.Price);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        alert('Error fetching product data');
      });
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      Name: name, 
      Description: description,
      Price: parseFloat(price), 
    };

    console.log('Sending updated data:', updatedProduct); 

    
    axios.put(`https://678a8ededd587da7ac2aa691.mockapi.io/Products/${id}`, updatedProduct, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        alert('Product updated successfully');
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error updating product', error);
        alert('Failed to update product');
      });
  };

  return (
    <div>
      <h1>Edit Product</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
