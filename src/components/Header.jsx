import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context'


function Header() {
  const {cart} = useContext(Context)
  const cartIcon = cart.length > 0? <i className={`ri-shopping-cart-fill ri-fw ri-2x`}></i>:<i className={`ri-shopping-cart-line ri-fw ri-2x`}></i>

  return (
    <header>
        <Link to="/"><h2>Pic Some</h2></Link>
        <Link to="/cart">
            {cartIcon}
        </Link>
    </header>
  )
}

export default Header