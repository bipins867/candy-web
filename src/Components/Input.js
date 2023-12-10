import React,{useState,useContext} from 'react'
import CartContext from './Store/cart-context'

const Input = (props) => {
   const cartCtx=useContext(CartContext)
    const [name,setName]=useState('')
    const [desc,setDesc]=useState('')
    const [price,setPrice]=useState('')
    const nameHandler=(event)=>{
      setName(event.target.value)
    }
    const descHandler=(event)=>{
         setDesc(event.target.value)
    }
    const priceHandler=(event)=>{
     setPrice(event.target.value)
    }
    const addInput=(event)=>{
   event.preventDefault();
   props.onAdd(name,desc,price)
  
   
   setName('')
   setPrice('')
   setDesc('')
    }
  return (
    <div>
    <form onSubmit={addInput}>
        <label htmlFor='candyname'>candy Name</label>
        <input type='text' id='candy' value={name} onChange={nameHandler}></input>
        <label htmlFor='desc'>Description</label>
        <input type='text' id='desc' value={desc} onChange={descHandler}></input>
        <label htmlFor='price'>Price</label>
        <input type='number' id='price' value={price} onChange={priceHandler}></input>
        <button type='onSubmit'>Add Product</button>
    </form>
    <button onClick={props.onShow} >cart <span>{cartCtx.items.length}</span></button>
    </div>
  )
}

export default Input