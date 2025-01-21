import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://678a8ededd587da7ac2aa691.mockapi.io/Products')
        .then((response) => setProducts(response.data));
  }, []);
  const deleteProduct = (id) => {
    if (window.confirm('Are you sure?')) {
      axios.delete(`https://678a8ededd587da7ac2aa691.mockapi.io/Products/${id}`)
        .then(() => setProducts(products.filter(product => product.id !== id)));
    }
  };
  return (
    
    <>
   <div>
      <h1>Products</h1>
     <h1><Link to="/add">Add Product</Link></h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.Name}</td>
              <td>{product.Description}</td>
              <td>{product.Price}</td>
              <td>
                <Link to={`/edit/${product.id}`}>Edit</Link>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
