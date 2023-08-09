import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function EditProduct() {
  const { id: productId } = useParams();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    // Fetch product data from API and set initial values in the state
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
        headers: { 'Content-Type': 'application/json' },
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
    <div className="EditProduct">
      <div className="container my-50">
        <div className="col-md-8 mx-auto">
          <div className="card shadow p-4">
            <h2 className="card-title text-center mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Title</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="price">Product Price</label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="quantity">Product Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
