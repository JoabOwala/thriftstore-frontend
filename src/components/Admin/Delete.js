import React, { useState } from "react";



const Delete = () => {
  
  const [productId, setProductId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    deleteProduct(productId)
    .then((response) => {
      console.log(response);
      
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="Delete">
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

export default Delete;