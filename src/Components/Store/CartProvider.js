import React,{useState} from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const [cartstate,setCartstate]=useState({
        items:[],
        totalAmount:0
    })
    const addtoCartHandler=(item)=>{
      setCartstate((prev)=>{
        return {
            items:[...prev.items,item],
            totalAmount:parseInt(prev.totalAmount)+parseInt(prev.price)
        } 
      })
    }
    const removeCartHandler=(id)=>{

    }
    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addtoCartHandler,
        removeItem:removeCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}> 
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider