import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

function SingleProduct({ addToCart }) {
  const nav = useNavigate();
  const { id } = useParams();
  const [singleproduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setPrice(singleproduct.price * (quantity + 1));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(singleproduct.price * (quantity - 1));
    }
  };

  // const handleFinishOrder = () => {
  //   // Show Sweet Alert message
  //   nav('/cart');
  //   Swal.fire({
  //     title: 'Thank you for ordering!',
  //     text: 'Your product is on the way!',
  //     icon: 'success',
  //     confirmButtonText: 'OK',
  //   });
  // };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/products/${id}`)
      .then((res) => res.json())
      .then((singleproduct) => {
        setSingleProduct(singleproduct);
        setPrice(singleproduct.price);
      });
  }, [id]);

  return (
    <div className="container mt-5">

      <h5>hellos</h5>
      {singleproduct ? (
        <div key={singleproduct.id} className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={singleproduct.photo_url} className="img-fluid py-4" alt="loading..." />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-details p-4">
              <h2>Product details</h2>
              <h5 className="centered-title">{singleproduct.title}</h5>
              <p className="description">{singleproduct.description}</p>
              <p style={{ fontSize: '13px' }} className="desc2">
                Quantity: {quantity}
              </p>
              <p style={{ fontSize: '13px' }} className="desc2">
                Price: ${price}
              </p>
              <div>
                <button className="btn btn-secondary me-2" onClick={handleDecrement}>-</button>
                <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
              </div>
              <button className="btn btn-primary" onClick={() => addToCart(singleproduct)}>
                    Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default SingleProduct;