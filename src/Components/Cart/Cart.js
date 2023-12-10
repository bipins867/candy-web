import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'
import CartContext from '../Store/cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  
  const Amount=`$${cartCtx.totalAmount}`
    const CartItems=<ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(<CartItem key={item.id} name={item.name} price={item.price} />))}
    </ul>
  return (
    <Modal onClose={props.onClose}>
        {CartItems}
        <div className={classes.total}>
            <span>total Amount</span>
             <span>{Amount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>

  )
}

export default Cart