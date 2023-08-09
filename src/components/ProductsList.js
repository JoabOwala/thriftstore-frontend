import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product list from API
    async function fetchProductListings() {
      try {
        const response = await fetch('http://127.0.0.1:3001/listings');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product listings:', error);
      }
    }

    fetchProductListings();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3001/listings/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Remove the deleted product from the products list
        setProducts(products.filter(product => product.id !== productId));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="ProductsList-nav">
      <div className="container my-5">
        <div className="col-md-8 mx-auto delete h-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="card shadow px-3 py-5 mb-3"
              style={{ width: "600px", backgroundColor: "#E8F9FD" }}
            >
              <h2 className="card-title text-center">{product.product.title}</h2>
              <img
                src={`${product.product.photo_url}`}
                alt={`Product ${product.id}`}
                className="img-fluid"
              />
              <p>Product Price: ${product.product.price}</p>
              <p>Product Quantity: {product.product.quantity}</p>
              <p>Seller: {product.seller.username}</p>
              <form>
                <Link to={`/edit/${product.id}`} className="btn btn-primary mr-2">
                  Edit
                </Link>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
