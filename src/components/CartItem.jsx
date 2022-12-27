import React, { useContext, useState } from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'


useHover
function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    const iconClassName = hovered? 'ri-delete-bin-fill': 'ri-delete-bin-line'


    return (
        <div className='cart-item'>
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
                ></i>
            <img src={item.url} width='130px'/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem