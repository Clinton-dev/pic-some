import React, {useContext, useEffect, useState} from 'react'

import CartItem from '../components/CartItem'
import { Context } from '../context'


function Cart() {

  const {cart, clearCart} = useContext(Context)
  const [total, setTotal] = useState(0)
  const [buttonText, setButtonText] = useState('Place order')

  const cartItems = cart.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem}/>
  })

  const placeOrder = () => {
    setButtonText('Ordering ...')

    setTimeout(() => {
      clearCart()
      setButtonText('Place Order')
    }, 2000)
  }

  useEffect(() => {
    setTotal(5.99 * cart.length)
  },[cart])



  return (
    <div className='cart-page'>
      <h1>Checkout</h1>
      {cartItems}
      <p className='total-cost'>Total: {total}</p>
      {cart.length > 0 ?
        <div className='order-button'>
          <button onClick={() => placeOrder()}>{buttonText}</button>
        </div> :
      <p className='empty-item'>No items in cart</p>}
    </div>
  )
}

export default Cart