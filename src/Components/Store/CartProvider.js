import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartstate, setCartstate] = useState({
    items: [],
    totalAmount: 0,
  });
  
  
  const addtoCartHandler = (item) => {
    setCartstate((prev) => {
     
      
      const newItems = [...prev.items];
      
      let flag = false;
      for (const x of newItems) {
        if (x.id === item.id) {
          x.quantity = x.quantity + item.quantity;
          console.log(x.quantity,item.quantity)
          flag = true;
          break;
        }
      }
      if (!flag) {
        newItems.push(item);
      }
      
      return {
        items: newItems,
        totalAmount:
          parseInt(prev.totalAmount) + parseInt(item.price) * item.quantity,
      };
    });
  };
  const removeCartHandler = (id) => {};
  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addtoCartHandler,
    removeItem: removeCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
