import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } else {
        Swal.fire('Error!', 'Failed to delete the product.', 'error');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      Swal.fire('Error!', 'An error occurred while deleting the product.', 'error');
    }
  };

  return (
    <div className="ProductsList">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-4 mb-4"
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
                <br />
                <br />
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



