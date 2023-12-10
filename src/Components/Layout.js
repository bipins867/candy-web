import React,{useContext} from 'react'
import CartContext from './Store/cart-context'

const Layout = (props) => {
  const cartCtx=useContext(CartContext)
  
    

  const addToCart=(user)=>{
    let quantity=1
    const updateItems={...user,quantity:quantity}
    console.log(user)
    cartCtx.addItem(updateItems)
    
  }
  const addTowCart=(user)=>{
    let quantity=2
    const updateItems={...user,quantity:quantity}
    cartCtx.addItem(updateItems)
    
  }
  const addThreeCart=(user)=>{
    let quantity=3
    const updateItems={...user,quantity:quantity}
    cartCtx.addItem(updateItems)
    
  }

  return (
    <div>
        <ul>
            {props.users.map((user)=>(
                <li key={user.id}>{user.name}  {user.desc} {user.price}
                <button onClick={()=>addToCart(user)}>Buy One
                </button> <button onClick={()=>addTowCart(user)} >Buy two</button> 
                <button  onClick={()=>{addThreeCart(user)}}>Buy Three</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Layout