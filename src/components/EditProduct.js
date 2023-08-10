import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    async function fetchProductData() {
      try {
        const response = await fetch(`http://127.0.0.1:3001/products/${productId}`);
        const data = await response.json();
        setProduct(data); // Assuming the API response matches the product structure
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
  
    fetchProductData();
  }, [productId]);
  

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedProduct = {
      title: product.name,
      description: product.description,
      photo_url: product.photo_url,
      price: parseFloat(product.price),
      quantity: parseInt(product.quantity)
    };
  
    try {
      const response = await fetch(`http://127.0.0.1:3001/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });
  
      if (response.ok) {
        console.log('Product updated successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <section className="vh-70">
      <div className="container fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Product </p>
                    <form className="mx-1 mx-md-4">
                      {/* Form input fields */}
                      {/* Example: */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Product Title</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                      
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Product Description</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="photo_url"
                            value={product.photo_url}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">photo_url</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                      
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">price</label>
                        </div>
                      </div>

                      <div className="form-outline flex-fill mb-0 extended-input">
                       
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form3Example1c">quantity</label>
                        </div>
                      </div>

                      {/* More form input fields */}
                      {/* ... */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
                          Save
                        </button>

                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src={product.photo_url}
                    className="img-fluid"
                    alt="Sample"
                    style={{ maxWidth: '100%' }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProduct;
