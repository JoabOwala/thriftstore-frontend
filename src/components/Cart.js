import React from 'react';


function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (itemId) => {
    // Filter out the item with the specified itemId from the cartItems
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    // Update the cart state
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Welcome to the cart page</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              {item.photo_url && (
                <img src={item.photo_url} alt={item.title} className="img-fluid" />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                {typeof item.price === 'number' ? (
                  <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                ) : (
                  <p className="card-text">Price: N/A</p>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
