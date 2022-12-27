import React, {useState, useContext} from 'react'
import { Context } from '../context'


function Image({photo, className}) {
  const {toggleIsFavorite} = useContext(Context)

  const [hovered, setHovered] = useState(false)

  function heartIcon() {
    if(photo.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(photo.id)}></i>
    } else if(hovered){
      return <i className="ri-heart-line favorite" onClick={() => toggleIsFavorite(photo.id)}></i>
    }
  }

  function cartIcon() {
    if(hovered){
      return <i className="ri-add-circle-line cart"></i>
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      >
        <img src={photo.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}

export default Image