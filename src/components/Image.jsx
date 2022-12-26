import React from 'react'

function Image({photo, className}) {
  return (
    <div className={`${className} image-container`}>
        <img src={photo.url} className="image-grid"/>
    </div>
  )
}

export default Image