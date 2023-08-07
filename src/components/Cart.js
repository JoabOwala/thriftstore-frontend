import React from 'react';

const Cart = ({ cartItems, removeFromCart, setCartItems, clearCart }) => {
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    setCartItems([]);
    clearCart();
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const getTotalQuantity = () => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return totalQuantity;
  };

  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return totalAmount;
  };

  return (
    <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - {cartItems.length} items</h5>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <p>No items in the cart</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="row mb-4">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={item.photo_url} className="w-100" alt={item.title} />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{item.title}</strong></p>
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <div className="form-outline">
                          <input
                            id={`quantity-${item.id}`}
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            type="number"
                            className="form-control"
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          />
                          <label className="form-label" htmlFor={`quantity-${item.id}`}>
                            Quantity
                          </label>
                        </div>
                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong>${item.price}</strong>
                      </p>
                    </div>
                  </div>
                ))
              )}
              <hr className="my-4" />
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>We accept</strong></p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>${getTotalAmount()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>${getTotalAmount()}.00</strong></span>
                </li>
              </ul>

              <button type="button" className="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default Cart;
