import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  const [cartItem , setCartItem] = useState([])
  const [cartCount , setCartCount] = useState(0)
  const [cartSubTotal , setCartSubTotal] = useState(0)
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0 , 0)
  },[location])

  useEffect(()=>{

    let count = 0
    cartItem.map((item) => (count += item.attributes.quantity))
    setCartCount(count)

    let totalSum = 0
    cartItem.map((item) => (totalSum += item.attributes.price * item.attributes.quantity))
    setCartSubTotal(totalSum)
  },[cartItem])

  const handleAddToCart = (product , quantity) => {
      let items = [...cartItem] // cartitem me jo product hai use access kr rhe hai
      const index = items.findIndex(p => p.id === product.id) // p ka mtlb particular product // check current product available is items or not
      if(index !== -1) {  // if product is not available so only increase the quantity
        items[index].attributes.quantity += quantity
      }else {
        product.attributes.quantity = quantity
        product.attributes.rating = '4start'
        items = [...items , product]
      }
      console.log("----------->",items)
      setCartItem(items);
  }

  const handleRemoveFromCart = (product ) => {
    let items = [...cartItem]
    items = items.filter(p => p.id !== product.id)
    setCartItem(items)
  }

  const handleCartProductQuantity = (type , product) => {
    let item = [...cartItem] // cartitem me jo product hai use access kr rhe hai
    const index = item.findIndex(p => p.id === product.id)
    if(type === 'inc') {
      item[index].attributes.quantity += 1
    } else if(type === 'dec') {
      if(item[index].attributes.quantity === 1) return
      item[index].attributes.quantity -= 1
    }
    setCartItem(item)
  }

  return (
    <Context.Provider value={{ 
      category, setCategory, product, setProduct,
      cartCount , setCartCount , cartItem , setCartItem , cartSubTotal , setCartSubTotal , location , 
      handleAddToCart , handleRemoveFromCart
      ,handleCartProductQuantity
       }}>
      {children}
    </Context.Provider>
  );
};
