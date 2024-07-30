import "./CartItem.scss";

import { MdClose } from "react-icons/md";

import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const baseUrl = 'http://localhost:1337'
  const { cartItem ,  handleRemoveFromCart,handleCartProductQuantity } =
    useContext(Context);

    console.log(cartItem)

  return (
    <div className="cart-products">
      {cartItem.map((item) => (

        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={baseUrl + item?.attributes?.img?.data?.attributes?.url} alt="img" />
          </div>

          <div className="prod-details">
            <div className="name">{item.attributes.title}</div>
            {/* <MdClose className="pro-close-btn" /> */}
            <div className="quantity-btn">
              <span onClick={()=>handleCartProductQuantity('dec' , item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={()=>handleCartProductQuantity('inc' , item)}>+</span>
            </div>
            <div className="quantity-product">
              <span>{item.attributes.quantity}</span>
              <span className="cross-size">×</span>
              <span style={{ color: "#04AA6D" }}>₹ {item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>

          <p className="pro-close-btn" onClick={()=>handleRemoveFromCart(item)}>  {/* we remove item item from item array and then array
           print data using map
          */}
          ❌ </p>
        </div>

      ))}
    </div>
  );
};

export default CartItem;
