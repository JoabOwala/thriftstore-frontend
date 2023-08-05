import React, { useState, useEffect } from 'react';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product list from API or simulate
    const simulatedProducts = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        image: 'image1.jpg',
        price: '10.00',
        quantity: 5,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        image: 'image2.jpg',
        price: '20.00',
        quantity: 8,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description 3',
        image: 'image3.jpg',
        price: '15.00',
        quantity: 12,
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Description 4',
        image: 'image4.jpg',
        price: '25.00',
        quantity: 3,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description 5',
        image: 'image5.jpg',
        price: '18.00',
        quantity: 7,
      },
    ];

    setProducts(simulatedProducts);
  }, []);

  const handleEdit = (productId) => {
    // Handle edit logic
  };

  const handleDelete = (productId) => {
    // Handle delete logic
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
              <h2 className="card-title text-center">Product List</h2>
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder={`Product ${product.id}`}
                  value={product.name}
                  readOnly
                />
                {/* Add other input fields here */}
                <button
                  className="btn btn-primary mr-2"
                  type="button"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
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
