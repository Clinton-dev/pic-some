import React from 'react'

function Image({photo, className}) {
  function heartIcon() {
    return <i className="ri-heart-line favorite" ></i>
  }

  function cartIcon() {
    return <i className="ri-add-circle-line cart"></i>
  }

  return (
    <div className={`${className} image-container`}>
        <img src={photo.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}

export default Image