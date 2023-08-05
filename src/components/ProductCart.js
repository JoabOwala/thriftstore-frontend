import React, { useEffect, useState } from "react";

function ProductCart({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    fetch("http://127.0.0.1:3001/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the received products
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            {typeof product.price === "number" ? (
              <p className="card-text">Price: ${product.price.toFixed(2)}</p>
            ) : (
              <p className="card-text">Price: N/A</p>
            )}
            {product.photo_url && (
              <img src={product.photo_url} alt={product.title} className="img-fluid" />
            )}
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCart;

