// EditProduct.js

import { useState, useEffect } from 'react';

function EditProduct({ productId }) {

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    // Fetch product data from API
  }, [productId]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
      });

      if (response.ok) {
        console.log('Product updated successfully!');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="editproduct-nav">
         
      <div className="container my-5">
        <div className="col-md-8 mx-auto delete h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: "600px", backgroundColor: "#E8F9FD" }}
          >
            <h2 className="card-title text-center">Update Product</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input
                className="form-control"
                type="text"
                id="id"
                placeholder="Product ID"
                value={productId}
                onChange={handleChange}
              />
              <label htmlFor="id">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
              />
              <label htmlFor="id">Description:</label>
              <input
                className="form-control"
                type="text"
                id="description"
                placeholder="description"
                value={product.description}
                onChange={handleChange}
              />
              <label htmlFor="id">Image:</label>
              <input
                className="form-control"
                type="text"
                id="image"
                placeholder="phot_url"
                value={product.image}
                onChange={handleChange}
              />
              <label htmlFor="id">Price:</label>
              <input
                className="form-control"
                type="integer"
                id="price"
                placeholder="value"
                value={product.price}
                onChange={handleChange}
              />
              <label htmlFor="id">Quantity:</label>
              <input
                className="form-control"
                type="integer"
                id="quantity"
                placeholder="value"
                value={product.quantity}
                onChange={handleChange}
              />

              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};


export default EditProduct;