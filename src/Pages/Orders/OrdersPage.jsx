import React, { useState } from "react";
import './OrdersPage.css';
import { Link ,useLocation} from 'react-router-dom';

const OrdersPage = () => {
  // Example initial cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "HIGHLANDER Men Solid Casual Maroon Shirt",
      size: "M",
      seller: "HSAtlastradeFashion",
      price: 1999,
      discountedPrice: 679,
      quantity: 1,
      deliveryCharge: 40,
    },
    {
      id: 2,
      name: "Cello Whiteboard Marker Combo",
      size: "Set of 5, Multicolor",
      seller: "SURICYBCOMBazaar",
      price: 225,
      discountedPrice: 214,
      quantity: 1,
      deliveryCharge: 40,
    },
  ]);


  // Update quantity of a specific item in the cart
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    let discount = 0;
    let platformFee = 3;
    let deliveryCharges = 0;
    cartItems.forEach(item => {
      totalPrice += item.discountedPrice * item.quantity;
      discount += (item.price - item.discountedPrice) * item.quantity;
      deliveryCharges += item.deliveryCharge;
    });

    let totalAmount = totalPrice + platformFee + deliveryCharges;
    return { totalPrice, discount, platformFee, deliveryCharges, totalAmount };
  };

  const { totalPrice, discount, platformFee, deliveryCharges, totalAmount } = calculateTotal();
  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle order placement
  const placeOrder = () => {
    alert("Order placed successfully!");
    // Here you can add your order placement logic (e.g., API call to save the order)
    setCartItems([]); // Clear the cart after placing the order
  };

  return (
    <>
     <div className="order-container">
     <div className="order-container-left">
     <div className="address-container">
       <span>From Saved Address</span>
       <button className="edit-button">Edit Delivery Pincode</button>
    </div>
    <div className="cart-container">
      <h3>Your Cart</h3>

      <div className="cart-items">
        {cartItems.map((item) => (
          <>
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-size">Size: {item.size}</div>
              <div className="cart-item-seller">Seller: {item.seller}</div>
              <div className="cart-item-price">
                ₹{item.discountedPrice} <span>₹{item.price}</span> <span>{Math.floor(((item.price - item.discountedPrice) / item.price) * 100)}% Off</span>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
              </div>
            </div>
          </div>
          </> 
        ))}
          <>
          <div className="cart-order-btn"><button ><span>Place Order</span></button></div>
          </>
      </div>
      </div>
     </div>
     <div className="order-container-right">
     {cartItems.length > 0 && (
          <div className="price-details-section">
            <h3>Price Details</h3>
            <div className="price-details">
              <div className="price-item">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="price-item discount">
                <span>Discount</span>
                <span>− ₹{discount}</span>
              </div>
              <div className="price-item coupons">
                <span>Coupons for you</span>
                <span>− ₹31</span>
              </div>
              <div className="price-item platform-fee">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>
              <div className="price-item delivery-charges">
                <span>Delivery Charges</span>
                <span>₹{deliveryCharges} <span className="free">Free</span></span>
              </div>
              <div className="total-amount">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="savings">
                <span>You will save</span>
                <span>₹{discount + 31} on this order</span>
              </div>
            </div>
          </div>
          
        )}
      </div>           
     </div>
     <div className="order-footer">
      
     </div>
    </>
  );
};

export default OrdersPage;
