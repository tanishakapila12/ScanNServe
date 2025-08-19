import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // Assuming StoreContext is imported and used to get the total cart amount
  // const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="Place-order">
      <div className="Place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" Placeholder="First Name" />
          <input type="text" Placeholder="Last Name" />
        </div>
        <input type="email" Placeholder="Email address" />
        <input type="text" Placeholder="Street" />
        <div className="multi-fields">
          <input type="text" Placeholder="City" />
          <input type="text" Placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" Placeholder="Zip code" />
          <input type="text" Placeholder="Country" />
        </div>
        <input type="text" Placeholder="Phone" />
      </div>
      <div className="Place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + 10}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
