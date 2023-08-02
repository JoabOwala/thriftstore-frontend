// AdminNav.js

import { useState } from 'react';

function AdminNav() {

  const [productId, setProductId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE' 
      });
      if (response.ok) {
        console.log('Product deleted successfully!');
        setProductId(''); // reset form
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="admin-nav">
         
      <div className="container my-5">
        <div className="col-md-8 mx-auto delete h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: "600px", backgroundColor: "#E8F9FD" }}
          >
            <h2 className="card-title text-center">Delete Product</h2>
            <form onSubmit={handleDelete}>
              <label htmlFor="id">ID:</label>
              <input
                className="form-control"
                type="text"
                id="id"
                placeholder="Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

    



export default AdminNav;