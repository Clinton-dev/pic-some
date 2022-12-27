import React, {useContext} from 'react'

import CartItem from '../components/CartItem'
import { Context } from '../context'


function Cart() {

  const {cart} = useContext(Context)

  const cartItems = cart.map(cartItem => {
      return <CartItem key={cartItem.id} item={cartItem}/>
  })

  return (
    <div>
      {cart.length > 0 ? cartItems : <p className='empty-item'>No items in cart</p>}
    </div>
  )
}

export default Cart