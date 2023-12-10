import React,{useState} from 'react';
import './App.css';
import Input from './Components/Input';
import Layout from './Components/Layout';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
function App() {
  const [input,setInput]=useState([])
  const [cartIsShown,setCartIsShown]=useState(false)
  const InputHandler=(Aname,Adesc,Aprice)=>{
    setInput((prev)=>{
      return [...prev,{ name:Aname,desc:Adesc,price:Aprice, id:Math.random()}]
    })
  }
  const showCartHandler=()=>{
       setCartIsShown(true)
  }
  const HideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider >
      {cartIsShown && <Cart onClose={HideCartHandler}/>}
     <Input onAdd={InputHandler} onShow={showCartHandler}/>
     <Layout users={input}/>
    </CartProvider>
  );
}

export default App;
