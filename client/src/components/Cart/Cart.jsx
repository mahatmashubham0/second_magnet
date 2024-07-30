import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "../Cart/CartItem/CartItem";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ showCartPanel }) => {
  const { cartItem, cartSubTotal } = useContext(Context);
  const [email , setEmail] = useState()
  console.log(email);
  console.log("value", cartItem.length);


  const handlePayment = async () => {
    const stripe = await loadStripe('pk_test_51PhpUb2MQTsmWyUNrn7UY7v5GuxpqAWdu9cvw8sjQIiDK4LOL3OpKKjnbmqCBMVd5SZWxm93j1Cthr8r9t0KCciN00dFuCPoQA');

    const response = await axios.post('http://localhost:4000/create-checkout-session', {
      email: email,
      items: cartItem
    });

    const { id: sessionId } = await response.data;
    console.log("Session ID:", sessionId);

    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.error("Error redirecting to checkout:", error.message);
    }
  };

 

  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="shopping-cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close" onClick={() => showCartPanel(false)}>
            <MdClose /> <p>Close</p>
          </span>
        </div>

        {!cartItem?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Product in the Cart Item </span>
            <button className="button">Return to Shop</button>
          </div>
        )}

        <>
          {!!cartItem?.length && (
            <>
              <CartItem />
              <div className="cart-footer">
                <div style={{padding: '1rem'}}>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required />
                      <br />
                    <label for="email" >Email</label>
                    <input onChange={(e)=> {setEmail(e.target.value)}} type="email" id="email" name="email" placeholder="Enter your email" required style={{paddingLeft: '1rem' , marginLeft: '1.5rem'}}/>
                    
                </div>
                <div className="subtotal">
                  <span className="text">Total</span>
                  <span className="text-total">₹ {cartSubTotal}</span>
                </div>
                <div className="checkout-btn" onClick={handlePayment}>
                  <button className="button">
                    Check Out
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Cart;
