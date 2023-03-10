import React, {useState, useContext} from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'


function Image({photo, className}) {
  const {toggleIsFavorite, addToCart, cart, removeFromCart} = useContext(Context)

  const [hovered, ref] = useHover()

  function heartIcon() {
    if(photo.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(photo.id)}></i>
    } else if(hovered){
      return <i className="ri-heart-line favorite" onClick={() => toggleIsFavorite(photo.id)}></i>
    }
  }


  function cartIcon() {
    if(cart.includes(photo)) {
      return <i className="ri-add-circle-fill cart" onClick={() => removeFromCart(photo.id)}></i>
    }else if(hovered){
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(photo)}></i>
    }
  }


  return (
    <div
      className={`${className} image-container`}
      ref={ref}
      >
        <img src={photo.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}

export default Image